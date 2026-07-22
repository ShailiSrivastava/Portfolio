import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground({ theme }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    
    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // 4. Create Dynamic Canvas Particle Texture based on Theme
    const createParticleTexture = (isLightMode) => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      if (isLightMode) {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient.addColorStop(0.3, 'rgba(30, 41, 59, 0.8)');
        gradient.addColorStop(0.6, 'rgba(71, 85, 105, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(226, 232, 240, 0.8)');
        gradient.addColorStop(0.6, 'rgba(148, 163, 184, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      return new THREE.CanvasTexture(canvas);
    };

    let particleTexture = createParticleTexture(theme === 'light');

    // 5. Build 3D Particle Galaxy
    const particleCount = 3500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const updateColors = (isLight) => {
      const colorA = isLight ? new THREE.Color('#000000') : new THREE.Color('#ffffff');
      const colorB = isLight ? new THREE.Color('#475569') : new THREE.Color('#94a3b8');
      const colorC = isLight ? new THREE.Color('#0f172a') : new THREE.Color('#e2e8f0');

      for (let i = 0; i < particleCount; i++) {
        const r = positions[i * 3] ? Math.sqrt(positions[i * 3] ** 2 + positions[i * 3 + 2] ** 2) : Math.random() * 11 + 0.5;
        const ratio = r / 11;
        const tempColor = new THREE.Color();
        if (ratio < 0.4) {
          tempColor.lerpColors(colorA, colorC, ratio / 0.4);
        } else {
          tempColor.lerpColors(colorC, colorB, (ratio - 0.4) / 0.6);
        }

        colors[i * 3] = tempColor.r;
        colors[i * 3 + 1] = tempColor.g;
        colors[i * 3 + 2] = tempColor.b;
      }
      if (geometry.attributes.color) {
        geometry.attributes.color.needsUpdate = true;
      }
    };

    for (let i = 0; i < particleCount; i++) {
      const r = Math.random() * 11 + 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * 0.3;
      
      const armOffset = (i % 2 === 0 ? 0 : Math.PI);
      const spiralAngle = r * 0.7 + armOffset;

      const x = Math.cos(theta + spiralAngle) * r + (Math.random() - 0.5) * 0.6;
      const y = phi * r + (Math.random() - 0.5) * 0.6;
      const z = Math.sin(theta + spiralAngle) * r + (Math.random() - 0.5) * 0.6;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    updateColors(theme === 'light');

    const material = new THREE.PointsMaterial({
      size: 0.13,
      map: particleTexture,
      transparent: true,
      blending: theme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // 6. Handle Theme Switch Dynamically
    const handleThemeChange = (e) => {
      const isLight = e.detail === 'light';
      particleTexture.dispose();
      particleTexture = createParticleTexture(isLight);
      material.map = particleTexture;
      material.blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending;
      material.needsUpdate = true;
      updateColors(isLight);
    };

    window.addEventListener('themeChange', handleThemeChange);

    // 7. Storytelling Parameters
    let currentSpeed = 0.02;
    let targetSpeed = 0.02;
    let currentCameraZ = 8;
    let targetCameraZ = 8;
    let currentCameraY = 0;
    let targetCameraY = 0;
    let currentRotationX = 0;
    let targetRotationX = 0;
    let mouseSensitivity = 0.3;
    let targetMouseSensitivity = 0.3;

    const handleSectionChange = (event) => {
      const section = event.detail;
      switch (section) {
        case 'home':
          targetSpeed = 0.02;
          targetCameraZ = 8.5;
          targetCameraY = 0;
          targetRotationX = 0;
          targetMouseSensitivity = 0.3;
          break;
        case 'skills':
          targetSpeed = 0.08;
          targetCameraZ = 5.5;
          targetCameraY = 0.5;
          targetRotationX = Math.PI / 6;
          targetMouseSensitivity = 0.2;
          break;
        case 'projects':
          targetSpeed = 0.035;
          targetCameraZ = 11.5;
          targetCameraY = -0.5;
          targetRotationX = -Math.PI / 6;
          targetMouseSensitivity = 0.4;
          break;
        case 'experience':
          targetSpeed = 0.05;
          targetCameraZ = 7.0;
          targetCameraY = 0;
          targetRotationX = Math.PI / 2.2;
          targetMouseSensitivity = 0.2;
          break;
        case 'education':
          targetSpeed = 0.012;
          targetCameraZ = 9.5;
          targetCameraY = -0.2;
          targetRotationX = Math.PI / 3;
          targetMouseSensitivity = 0.25;
          break;
        case 'contact':
          targetSpeed = 0.06;
          targetCameraZ = 6.5;
          targetCameraY = 0.2;
          targetRotationX = 0;
          targetMouseSensitivity = 0.8;
          break;
        default:
          break;
      }
    };

    window.addEventListener('sectionChange', handleSectionChange);

    // 8. Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    window.addEventListener('mousemove', onMouseMove);

    // 9. Resize Listener
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // 10. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      currentSpeed += (targetSpeed - currentSpeed) * 0.03;
      currentCameraZ += (targetCameraZ - currentCameraZ) * 0.03;
      currentCameraY += (targetCameraY - currentCameraY) * 0.03;
      currentRotationX += (targetRotationX - currentRotationX) * 0.03;
      mouseSensitivity += (targetMouseSensitivity - mouseSensitivity) * 0.04;

      points.rotation.y = elapsedTime * currentSpeed;
      points.rotation.x = currentRotationX;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      points.position.x = targetX * mouseSensitivity;
      points.position.y = -targetY * mouseSensitivity;

      camera.position.z = currentCameraZ;
      camera.position.y = currentCameraY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
      window.removeEventListener('sectionChange', handleSectionChange);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
    };
  }, []);

  return <div id="canvas-container" ref={containerRef} />;
}
