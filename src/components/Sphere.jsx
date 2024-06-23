import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Construction = ({position, size, color}) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.2
    ref.current.rotation.x += delta * 0.2
  })

  return (
    <mesh 
      position={position} 
      ref={ref} 
    >
      <directionalLight position={[0, 10, 10]} />

      <sphereGeometry args={[2.5, 64, 64]}/>
      <meshStandardMaterial color='#A020F0' wireframe/>
    </mesh>
  )
}

const Sphere = () => {
  return (
    <Canvas>
      <Construction />
    </Canvas>
  )
}

export default Sphere

// const Sphere = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     // Create the Three.js scene
//     const scene = new THREE.Scene();

//     // Create the sphere
//     const geometry = new THREE.SphereGeometry(3, 64, 64);
//     const material = new THREE.MeshStandardMaterial({
//       color: '#A020F0'
//     });
//     const mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);

//     // Create the light
//     const light = new THREE.PointLight(0xffffff, 1, 100);
//     light.position.set(0, 10, 10);
//     scene.add(light);

    // // Create the camera
    // const camera = new THREE.PerspectiveCamera(45, 800 / 600);
    // camera.position.z = 20;
    // scene.add(camera);

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current
//     });
//     renderer.setSize(800, 600);

//     // Render the scene
//     const renderScene = () => {
//       renderer.render(scene, camera);
//     };
//     renderScene();

//     // Update the renderer on window resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       renderScene();
//     };
//     window.addEventListener('resize', handleResize);

//     // Cleanup function
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       // Dispose of resources if necessary
//       geometry.dispose();
//       material.dispose();
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <Section>
//       <canvas ref={canvasRef} className="webgl" />
//       <div>Sphere</div>
//     </Section>
//   );
// };

// export default Sphere;
