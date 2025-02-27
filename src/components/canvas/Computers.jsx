import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const Computers = () => {
  const { scene, animations } = useGLTF("./desktop_pc/scene.gltf");
  const [mixer] = useState(() => new THREE.AnimationMixer());

  // useEffect(() => {
  //   console.log("Animations:", animations);

  //   if (animations && animations.length > 0) {
  //     const action = mixer.clipAction(animations[0]);
  //     action.play();
  //   }

  //   return () => {
  //     // Cleanup when the component unmounts
  //     mixer.stopAllAction();
  //   };
  // }, [animations, mixer]);

  return (
    <group>
      <hemisphereLight intensity={2.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10.5}
        castShadow
        shadow-mapSize={{ width: 1024, height: 1024 }}
      />
      <pointLight intensity={1} />
      {scene && (
        <primitive object={scene} scale={0.75} position={[0, -1, -1]} rotation={[-0.01, -0.2, -0.2]} />
      )}
    </group>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.25}
          
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
