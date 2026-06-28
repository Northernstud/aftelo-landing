import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

interface EchoOrbProps {
  /** Smoothed pointer position in [-1, 1]. */
  pointer: { x: number; y: number };
  reduced: boolean;
}

/**
 * The signature element: "Echo" as a refractive frosted-glass sphere
 * with an internal purple->pink glow, drifting in the void.
 *
 * Three layers, mirroring the brand:
 *   - an inner emissive core (the warm glow behind the glass)
 *   - the transmissive glass shell (the frosted surface)
 *   - a faint outer halo ring
 * It tilts gently toward the pointer; under reduce-motion it sits still.
 */
export function EchoOrb({ pointer, reduced }: EchoOrbProps) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (reduced) {
      group.current.rotation.set(0, 0, 0);
      return;
    }
    // gentle, continuous self-rotation
    group.current.rotation.y += delta * 0.12;

    // ease toward a small tilt that follows the pointer
    const targetX = pointer.y * 0.25;
    const targetZ = -pointer.x * 0.18;
    group.current.rotation.x +=
      (targetX - group.current.rotation.x) * 0.04;
    group.current.rotation.z +=
      (targetZ - group.current.rotation.z) * 0.04;

    // slow breathing pulse on the inner core
    if (core.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.9) * 0.04;
      core.current.scale.setScalar(pulse);
    }
  });

  return (
    <Float
      enabled={!reduced}
      speed={1.1}
      rotationIntensity={0.2}
      floatIntensity={0.6}
    >
      <group ref={group}>
        {/* inner glowing core — the warm light behind the glass.
            Kept small + moderate so it reads as a glow contained inside
            the glass, never a solid neon ball (brand: no big vivid fill). */}
        <mesh ref={core}>
          <sphereGeometry args={[0.58, 48, 48]} />
          <meshStandardMaterial
            color="#FF005E"
            emissive="#C953FF"
            emissiveIntensity={1.4}
            roughness={0.5}
            toneMapped={false}
          />
        </mesh>

        {/* a few drifting motes inside, like thoughts */}
        <Motes />

        {/* frosted-glass shell */}
        <mesh>
          <sphereGeometry args={[1.5, 96, 96]} />
          <MeshTransmissionMaterial
            thickness={1.4}
            roughness={0.22}
            transmission={1}
            ior={1.32}
            chromaticAberration={0.04}
            anisotropy={0.25}
            distortion={0.25}
            distortionScale={0.5}
            temporalDistortion={reduced ? 0 : 0.08}
            backside
            backsideThickness={0.8}
            color="#F0DDFF"
            attenuationColor="#D86BFF"
            attenuationDistance={2.6}
          />
        </mesh>

        {/* faint halo ring to echo the brand mark */}
        <mesh rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[1.85, 0.012, 16, 120]} />
          <meshBasicMaterial color="#C953FF" transparent opacity={0.35} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
}

/** Small bright points suspended inside the orb. */
function Motes() {
  const points = useRef<THREE.Points>(null);
  const count = 38;

  const positions = useRef<Float32Array>();
  if (!positions.current) {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // random points within a sphere of radius ~1.15
      const r = Math.cbrt(Math.random()) * 1.15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    positions.current = arr;
  }

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y -= delta * 0.06;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#F3F3F8"
        transparent
        opacity={0.7}
        sizeAttenuation
        toneMapped={false}
      />
    </points>
  );
}
