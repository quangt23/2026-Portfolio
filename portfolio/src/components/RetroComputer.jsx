import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function RetroComputerModel() {
  const { scene } = useGLTF("/models/retro_computer_v2.glb");
  const ref = useRef();

  // subtle idle animation (slow float + slight rotation)
  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.002;

    ref.current.position.y =
      Math.sin(Date.now() * 0.0012) * 0.05;
  });

  return <primitive ref={ref} object={scene} scale={1.2} />;
}

export default function RetroComputer() {
  return (
    <div className="retro-canvas">
      <Canvas camera={{ position: [0, 1.2, 3], fov: 45 }}>
        {/* lighting */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} intensity={1} />

        <RetroComputerModel />

        {/* user interaction */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}

// important for GLTF loading
useGLTF.preload("/models/retro_computer_v2.glb");