import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/Introduction.css';
import RotatingShape from '../components/RotatingShape';

function Introduction() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects-top-body');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeIn = useSpring({
    opacity: isMounted ? 1 : 0,
    transform: isMounted ? 'translateY(0)' : 'translateY(20px)',
  });

  return (
    <animated.section
      style={fadeIn}
      id="intro"
      className="h-screen flex flex-col justify-center items-center text-center px-4 text-gray-800"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg md:text-2xl mb-6">I'm Max, a Multidisciplinary Software Engineer with recent interests in Cloud Computing.</p>
      <button
        className="btn bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors duration-300"
        onClick={handleScrollToProjects}
      >
        View Projects
      </button>
    </animated.section>
  );
}

export default Introduction;
