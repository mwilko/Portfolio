import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Basketball = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/basketball.gltf');
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.defaultMaterial.geometry} material={materials.None} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  );
});

useGLTF.preload('/basketball.gltf');

export { Basketball as Model };
