import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Model from './Akira'; // Import 3D model component here
import { OrbitControls } from '@react-three/drei';


function BombLight(props) {
  const lightRef = useRef();
  const time = useRef(0);

  useFrame(() => {
    // Update light properties here
    const light = lightRef.current;
    light.intensity = Math.abs(Math.sin(time.current * 0.5)) * 2; // Pulse effect

    time.current += 0.05;
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 5, 0]} // Position the light at the center of the model
      color={0xffffff}
      intensity={1}
      decay={0.5} // How the light dims with distance
      distance={100}
    />
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <BombLight />
      {/* Add model here */}
      <Model />
      <OrbitControls />
    </>
  );
}

function NeoTokyo() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

export default NeoTokyo;
