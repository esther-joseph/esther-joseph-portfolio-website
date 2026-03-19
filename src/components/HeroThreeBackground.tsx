import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./HeroThreeBackground.module.css";

/**
 * Subtle Three.js background for the hero: rotating wireframe hexagon and soft glow.
 */
export function HeroThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Flat-top hexagon geometry (radius 1, Y-up)
    const hexShape = new THREE.Shape();
    const r = 1.2;
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = r * Math.cos(angle);
      const y = r * Math.sin(angle);
      if (i === 0) hexShape.moveTo(x, y);
      else hexShape.lineTo(x, y);
    }
    hexShape.closePath();
    const geo = new THREE.ShapeGeometry(hexShape);
    const edges = new THREE.EdgesGeometry(geo);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({
        color: 0x7b68a6,
        transparent: true,
        opacity: 0.35,
      })
    );
    line.rotation.x = Math.PI / 2;
    scene.add(line);

    const geo2 = new THREE.EdgesGeometry(new THREE.RingGeometry(0.8, 1.4, 6));
    const line2 = new THREE.LineSegments(
      geo2,
      new THREE.LineBasicMaterial({
        color: 0xb8a9c9,
        transparent: true,
        opacity: 0.2,
      })
    );
    line2.rotation.x = Math.PI / 2;
    scene.add(line2);

    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = performance.now() * 0.0002;
      line.rotation.z = t;
      line2.rotation.z = t * 0.7;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!container.parentElement) return;
      const w = container.parentElement.offsetWidth;
      const h = container.parentElement.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      geo.dispose();
      edges.dispose();
      geo2.dispose();
    };
  }, []);

  return <div ref={containerRef} className={styles.canvasWrap} aria-hidden />;
}
