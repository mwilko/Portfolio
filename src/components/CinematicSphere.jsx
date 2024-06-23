import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { DirectionalLight } from 'three'; // Use three.js directly for DirectionalLight
import { Model } from './Basketball';

const FloatingSphere = ({ speedFactor = 2 }) => {
    const meshRef = useRef();
    const [position, setPosition] = useState([0, 0, 0]);
    const [velocity, setVelocity] = useState([
        (Math.random() * 0.1 - 0.05) * speedFactor,
        (Math.random() * 0.1 - 0.05) * speedFactor,
        (Math.random() * 0.1 - 0.05) * speedFactor
    ]);

    // Define boundaries for x, y, and z axes
    const boundary = 5;
    const zBoundary = 2;  // Adjust this value as needed to fit your screen's depth

    useFrame(() => {
        let [x, y, z] = position;
        let [vx, vy, vz] = velocity;

        x += vx;
        y += vy;
        z += vz;

        // Update velocity based on boundary collisions
        if (x > boundary || x < -boundary) {
            vx = -vx + (Math.random() * 0.02 - 0.01) * speedFactor;
        }
        if (y > boundary || y < -boundary) {
            vy = -vy + (Math.random() * 0.02 - 0.01) * speedFactor;
        }
        if (z > zBoundary || z < -zBoundary) {
            vz = -vz + (Math.random() * 0.02 - 0.01) * speedFactor;
        }

        // Update position and velocity state
        setPosition([x, y, z]);
        setVelocity([vx, vy, vz]);

        if (meshRef.current) {
            meshRef.current.position.set(x, y, z);

            // Update rotation
            meshRef.current.rotation.x += Math.abs(vy) * 0.1;
            meshRef.current.rotation.y += Math.abs(vx) * 0.1;
            meshRef.current.rotation.z += Math.abs(vz) * 0.1;
        }
    });

    return <Model ref={meshRef} />;
};

const CinematicSphere = () => {
    return (
        <Canvas>
            {/* Camera */}
            <perspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />

            {/* Light */}
            <directionalLight position={[0, 10, 10]} intensity={3} />

            {/* Floating Sphere with increased speed */}
            <FloatingSphere speedFactor={2} />
        </Canvas>
    );
};

export default CinematicSphere;
