import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { TorusGeometry } from 'three';
import {
    MeshWobbleMaterial,
    OrbitControls,
    useHelper,
  } from "@react-three/drei";

const Construction = () => {
  const torusRef = useRef();

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh 
      ref={torusRef}
      geometry={new TorusGeometry(1, 0.7, 10, 1000)}
      position={[0, 1, 0]}
    >
      <directionalLight position={[0, 10, 10]} />
      {/* <meshStandardMaterial color='#A020F0'/> */}
      <MeshWobbleMaterial factor={12} color='#A020F0'/>
    </mesh>
  )
}

const TorusComponent = () => {
  return (
    <Canvas>
      <Construction />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default TorusComponent