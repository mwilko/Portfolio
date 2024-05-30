import React from 'react';
import Introduction from './Introduction.jsx'; // Import JSX for the intro section
import About from './About.jsx'; // Import About component
import Projects from './Projects.jsx'; // Import Projects component
import Contact from './Contact.jsx'; // Import Contact component

function HomePage() {
  return (
    <>
      {/* Add the Intro, About, Projects, and Contact components */}
      <Introduction/><About /><Projects /><Contact />
    </>
  );
}

export default HomePage;