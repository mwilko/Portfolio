import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Pokemon'; // Import 3D model component here
import { OrbitControls } from '@react-three/drei';

function Scene() {
  return (
    <>
      <directionalLight intensity={1} position={[0, 10, 0]} />
      <ambientLight intensity={0.5} />
      {/* Add model here with position */}
      <Model position={[0, -0.85, 0]} />
      <OrbitControls minDistance={1} maxDistance={15} />
    </>
  );
}

function Pokemon() {
  return (
    <Canvas camera={{ position: [0, 0.5, 1] }}>
      <Scene />
    </Canvas>
  );
}

export default Pokemon;
