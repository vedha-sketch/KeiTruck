"use client";

import { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

interface TruckModel3DProps {
  color: string;
}

const MODEL_PATH = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/simple_kei_truck.glb`;

function TruckModel({ color }: TruckModel3DProps) {
  const gltf = useGLTF(MODEL_PATH);

  // Enable shadows on all meshes
  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [gltf.scene]);

  // When color changes: update only the kei_truck material
  useEffect(() => {
    const truckColor = new THREE.Color(color);

    gltf.scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      const mat = child.material as THREE.MeshStandardMaterial;
      if (mat.name === "kei_truck") {
        mat.color.set(truckColor);
        mat.needsUpdate = true;
      }
    });
  }, [color, gltf.scene]);

  return <primitive object={gltf.scene} scale={1.8} />;
}

function ShadowFloor() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
      <planeGeometry args={[30, 30]} />
      <shadowMaterial opacity={0.25} />
    </mesh>
  );
}

export default function TruckModelViewer({ color }: TruckModel3DProps) {
  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden bg-paper border border-[0.5px] border-ink/10">
      <Canvas
        shadows
        camera={{ position: [-12, 6, 0], fov: 45, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[8, 8, 4]}
          intensity={1.4}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-bias={-0.0005}
        />
        <directionalLight position={[-5, 3, -5]} intensity={0.4} />

        <Suspense fallback={null}>
          <TruckModel color={color} />
          <ShadowFloor />
        </Suspense>

        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={true}
          enablePan={true}
          makeDefault
          target={[0, 0.5, 0]}
        />

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL_PATH);
