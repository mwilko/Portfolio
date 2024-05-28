// Projects.js

import React from 'react';
import './Projects.css'; // Import CSS styles for the projects section

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <h3>Inventory Manager</h3>
          <p>Cross-platform inventory tracking application. Allowing clients to create, update, edit, and delete company stock.</p>
        </div>
        <div className="project">
          <h3>Mobile Health Application</h3>
          <p>Mobile device application which utilizes AI and ML using Pose Estimation and Machine Learning frameworks in Python to predict chronic health conditions.</p>
        </div>
        <div className="project">
          <h3>API Bridge</h3>
          <p>Client-friendly software interface API which allows for configuring data on their database.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
