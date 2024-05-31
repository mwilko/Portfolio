import React from 'react';
import '../styles/About.css';
import RotatingShape from '../components/RotatingShape';

function About() {
  return (
    <section id="about" className="p-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg">I'm a computing enthusiast. My interest in computing varies from Artificial Intelligence 
      and Machine Learning to fields such as Cloud Computing and Software Development. <br /> 
      While studying in College and University, I've been searching through computing fields to find what I enjoy doing. 
      During this time, I've engaged with companies, some with global reach, to develop and maintain technical solutions.</p>
      <RotatingShape /> {/* Add the rotating shape component here */}
    </section>
  );
}

export default About;
