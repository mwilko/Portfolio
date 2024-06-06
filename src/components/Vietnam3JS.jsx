import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Model from './Vietnam'; // Import 3D model component here
import { OrbitControls } from '@react-three/drei';

function RotatingModel() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Adjust the speed of rotation here
    }
  });

  return <Model ref={ref} position={[0, -0.5, 0]} />;
}

function Scene() {
  return (
    <>
      <directionalLight intensity={1} position={[0, 10, 0]} />
      <ambientLight intensity={1} />
      {/* Use the rotating model component */}
      <RotatingModel />
      <OrbitControls minDistance={1} maxDistance={15} />
    </>
  );
}

function Vietnam() {
  return (
    <Canvas camera={{ position: [0, -0.35, 1.25] }}>
      <Scene />
    </Canvas>
  );
}

export default Vietnam;
