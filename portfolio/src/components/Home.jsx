// Home.js

import React from 'react';
import './Home.css'; // Import CSS styles for the home section
import languagesImg from './images/languages.jpeg'; // Import image for the home section

function Home() {
  return (
    <section id="hero" style={{ backgroundImage: `url(${languagesImg})` }}>
      <h1>Welcome to My Portfolio</h1>
      <p>I'm Max, a Multidisciplinary Software Engineer with recent interests in Cloud Computing.</p>
      <a href="/projects" className="btn">View Projects</a>
    </section>
  );
}

export default Home;
