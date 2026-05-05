"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Bowl() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={group} position={[0, -0.3, 0]}>
      {/* Bowl exterior */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1.4, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial
          color="#1a0707"
          roughness={0.35}
          metalness={0.15}
          clearcoat={0.6}
          clearcoatRoughness={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Bowl rim accent */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.4, 0.04, 32, 96]} />
        <meshStandardMaterial color="#d4a76a" metalness={0.8} roughness={0.25} />
      </mesh>
      {/* Soup surface (warm broth) */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.32, 64]} />
        <meshPhysicalMaterial
          color="#8e1a1f"
          roughness={0.15}
          metalness={0.1}
          transmission={0.2}
          thickness={0.5}
          ior={1.33}
        />
      </mesh>
      {/* Floating noodle suggestions (small spheres) */}
      <Garnish />
      {/* Steam particles */}
      <Steam />
    </group>
  );
}

function Garnish() {
  const items = useMemo(
    () =>
      Array.from({ length: 7 }).map((_, i) => ({
        pos: [
          Math.cos((i / 7) * Math.PI * 2) * (0.4 + Math.random() * 0.6),
          -0.04,
          Math.sin((i / 7) * Math.PI * 2) * (0.4 + Math.random() * 0.6),
        ] as [number, number, number],
        scale: 0.06 + Math.random() * 0.05,
        color: i % 2 === 0 ? "#ff6b35" : "#d4a76a",
      })),
    []
  );
  return (
    <>
      {items.map((it, i) => (
        <mesh key={i} position={it.pos}>
          <sphereGeometry args={[it.scale, 16, 16]} />
          <meshStandardMaterial
            color={it.color}
            emissive={it.color}
            emissiveIntensity={0.2}
            roughness={0.5}
          />
        </mesh>
      ))}
    </>
  );
}

function Steam() {
  const ref = useRef<THREE.Group>(null);
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        x: (Math.random() - 0.5) * 1.5,
        z: (Math.random() - 0.5) * 1.5,
        y: Math.random() * 2,
        scale: 0.15 + Math.random() * 0.2,
        speed: 0.2 + Math.random() * 0.3,
      })),
    []
  );

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.children.forEach((child, i) => {
      const p = particles[i];
      child.position.y += p.speed * delta;
      if (child.position.y > 3) child.position.y = -0.1;
      const t = Math.min(1, child.position.y / 2.5);
      (child as THREE.Mesh).scale.setScalar(p.scale * (1 + t * 1.4));
      ((child as THREE.Mesh).material as THREE.MeshStandardMaterial).opacity =
        Math.max(0, 0.4 * (1 - t));
    });
  });

  return (
    <group ref={ref}>
      {particles.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshStandardMaterial
            color="#faf6ee"
            transparent
            opacity={0.4}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function BowlScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 1.4, 4.2], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[3, 5, 4]}
        intensity={1.2}
        color="#ffd0a8"
        castShadow
      />
      <pointLight position={[-3, 2, -2]} intensity={1.2} color="#c1272d" />
      <pointLight position={[2, 0.5, -1]} intensity={0.8} color="#ff6b35" />
      <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.4}>
        <Bowl />
      </Float>
      <Environment preset="warehouse" />
    </Canvas>
  );
}
