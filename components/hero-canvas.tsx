"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

export default function HeroCanvas() {
    const canvasRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const pointsRef = useRef<THREE.Points | null>(null);
    const frameIdRef = useRef<number>(0);
    const mouseRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });

    const { theme } = useTheme();

    useEffect(() => {
        if (!canvasRef.current) return;

        // Initialize scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Initialize camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;
        cameraRef.current = camera;

        // Initialize renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        canvasRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = window.innerWidth < 768 ? 1500 : 3000;

        const positionArray = new Float32Array(particlesCount * 3);
        const scaleArray = new Float32Array(particlesCount);

        for (let i = 0; i < particlesCount * 3; i++) {
            // Position
            positionArray[i] = (Math.random() - 0.5) * 10;

            // Size variation
            if (i % 3 === 0) {
                scaleArray[i / 3] = Math.random();
            }
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
        particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));

        // Material with custom shader
        const particlesMaterial = new THREE.ShaderMaterial({
            vertexShader: `
        attribute float scale;
        uniform float uTime;
        uniform float uSize;
        
        void main() {
          vec3 pos = position;
          
          // Gentle wave motion
          pos.y += sin(pos.x * 0.5 + uTime) * 0.2;
          pos.x += cos(pos.y * 0.5 + uTime) * 0.2;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          
          gl_PointSize = uSize * scale * (1.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
            fragmentShader: `
        uniform vec3 uColor;
        
        void main() {
          // Circular point
          float distanceToCenter = length(gl_PointCoord - vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          strength = clamp(strength, 0.0, 1.0);
          
          gl_FragColor = vec4(uColor, strength);
        }
      `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: {
                uSize: { value: window.innerWidth < 768 ? 25.0 : 40.0 },
                uTime: { value: 0 },
                uColor: { value: new THREE.Color('#17c2e3') }
            }
        });

        // Create points
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);
        pointsRef.current = particles;

        // Mouse move event
        const handleMouseMove = (event: MouseEvent) => {
            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Animation
        const clock = new THREE.Clock();

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();

            if (pointsRef.current) {
                // Update time uniform for shader animation
                (pointsRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = elapsedTime;

                // Follow mouse with subtle movement
                pointsRef.current.rotation.x = mouseRef.current.y * 0.1;
                pointsRef.current.rotation.y = mouseRef.current.x * 0.1;
            }

            renderer.render(scene, camera);
            frameIdRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            if (!cameraRef.current || !rendererRef.current) return;

            // Update camera
            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();

            // Update renderer
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
            rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Update particle size based on screen width
            if (pointsRef.current) {
                (pointsRef.current.material as THREE.ShaderMaterial).uniforms.uSize.value =
                    window.innerWidth < 768 ? 25.0 : 40.0;
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            if (rendererRef.current && rendererRef.current.domElement && canvasRef.current) {
                canvasRef.current.removeChild(rendererRef.current.domElement);
            }
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameIdRef.current);

            if (pointsRef.current) {
                pointsRef.current.geometry.dispose();
                (pointsRef.current.material as THREE.Material).dispose();
            }
        };
    }, []);

    // Update particle color when theme changes
    useEffect(() => {
        if (pointsRef.current) {
            const material = pointsRef.current.material as THREE.ShaderMaterial;
            const color = theme === 'dark' ? '#17c2e3' : '#0d8ca4';
            material.uniforms.uColor.value = new THREE.Color(color);
        }
    }, [theme]);

    return <div ref={canvasRef} className="absolute inset-0 z-0" />;
}
