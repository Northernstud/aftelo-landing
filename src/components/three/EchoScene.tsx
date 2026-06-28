import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { usePointerParallax } from "@/hooks/usePointerParallax";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EchoOrb } from "./EchoOrb";
import "./EchoScene.css";

/**
 * Canvas host for the hero's Echo orb. Kept deliberately minimal —
 * one subject, one light rig — so the 3D reads as calm, not busy.
 *
 * The lighting environment is built in-scene with Lightformers (no
 * external HDR fetch), giving the glass brand-colored highlights to
 * refract. DPR is capped and pointer-events are off so the scene never
 * traps scrolling.
 */
export function EchoScene() {
  const pointer = usePointerParallax();
  const reduced = useReducedMotion();

  return (
    <div className="echo-scene" aria-hidden="true">
      <Canvas
        className="echo-scene__canvas"
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 6], fov: 38 }}
        frameloop={reduced ? "demand" : "always"}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 5, 4]} intensity={26} color="#C953FF" />
        <pointLight position={[-5, -3, 2]} intensity={20} color="#FF005E" />
        <pointLight position={[0, 0, 6]} intensity={5} color="#F3F3F8" />

        <Suspense fallback={null}>
          <EchoOrb pointer={pointer} reduced={reduced} />

          {/* In-scene IBL: brand-colored light cards the glass refracts. */}
          <Environment resolution={256} frames={1}>
            <color attach="background" args={["#07070c"]} />
            <Lightformer
              intensity={3}
              color="#C953FF"
              position={[3, 3, 2]}
              scale={[6, 6, 1]}
              form="circle"
            />
            <Lightformer
              intensity={2.4}
              color="#FF005E"
              position={[-4, -2, 1]}
              scale={[5, 5, 1]}
              form="circle"
            />
            <Lightformer
              intensity={1.3}
              color="#F4E9FF"
              position={[0, 4, -3]}
              scale={[8, 2, 1]}
              form="rect"
            />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}
