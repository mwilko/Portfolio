/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 akira.gltf 
Author: NAVAZA (https://sketchfab.com/navaza)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/a-regular-day-in-neo-tokyo-b5474d6b71004295a856ca77107e08fb
Title: A regular day in Neo-Tokyo
*/
import React, { forwardRef } from 'react'; // Import forwardRef
import { useGLTF } from '@react-three/drei'

const Model = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/akira.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.SUELO1_SUELO_0.geometry} material={materials.SUELO} />
      <mesh geometry={nodes.BASE_BASEyESCOMBROS_0.geometry} material={materials.BASEyESCOMBROS} />
      <mesh geometry={nodes.AGUA_AGUA1_0.geometry} material={materials.AGUA1} />
      <mesh geometry={nodes.ARBOLES_ARBOLES1_0.geometry} material={materials.ARBOLES1} />
      <mesh geometry={nodes.ESCOMBROS_BASEyESCOMBROS_0.geometry} material={materials.BASEyESCOMBROS} />
      <mesh geometry={nodes.BOMBAC_BOMBAByC_0.geometry} material={materials.BOMBAByC} />
      <mesh geometry={nodes.BOMBAB_BOMBAByC_0.geometry} material={materials.BOMBAByC} />
      <mesh geometry={nodes.BOMBAA_BOMBAA1_0.geometry} material={materials.BOMBAA1} />
      <mesh geometry={nodes.FONDO_FONDO1_0.geometry} material={materials.FONDO1} />
      <mesh geometry={nodes.CAMINOS_CAMINOS1_0.geometry} material={materials.CAMINOS1} />
      <mesh geometry={nodes.EDIFICIOS1_EDIFICIOS_0.geometry} material={materials.EDIFICIOS} />
      <mesh geometry={nodes.EDIFICIOS1_EDIFICIOS_0_1.geometry} material={materials.EDIFICIOS} />
      <mesh geometry={nodes.EDIFICIOS1_EDIFICIOS_0_2.geometry} material={materials.EDIFICIOS} />
      <mesh geometry={nodes.EDIFICIOS1_EDIFICIOS_0_3.geometry} material={materials.EDIFICIOS} />
      <mesh geometry={nodes.EDIFICIOS1_EDIFICIOS_0_4.geometry} material={materials.EDIFICIOS} />
      <mesh geometry={nodes.EDIFICIOS1_EDIFICIOS_0_5.geometry} material={materials.EDIFICIOS} />
      <mesh geometry={nodes.polySurface6_lambert8_0.geometry} material={materials.lambert8} />
      <mesh geometry={nodes.polySurface7_lambert9_0.geometry} material={materials.lambert9} />
      <mesh geometry={nodes.polySurface5_BASEyESCOMBROS_0.geometry} material={materials.BASEyESCOMBROS} />
    </group>
  )
});
export default Model;
useGLTF.preload('/akira.gltf')
