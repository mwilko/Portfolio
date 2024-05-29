// Projects.js

import React from 'react';
import './Projects.css'; // Import CSS styles for the projects section
import languagesImg from './images/languages.jpeg'; // Import image for the projects section

function Projects() {
  return (
    <><><section id="projects-top-body">
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
      <section id="hero" style={{ backgroundImage: `url(${languagesImg})` }}>
        <h1>Project Details</h1>
      </section></>
      <section id='projects-body'>
        <h2>Inventory Manager</h2>
        <p>Made using the Flutter framework, released and maintained by Google, I have create an application to manage inventory for clients.
          <br /> The application allows clients to create, update, edit, and delete company stock. The application is cross-platform,
           meaning it can be used on Android and iOS devices not forgetting Mac, Linux, Windows and Web, it can even run on RaspberryPI if wanted! 
          The application is also connected to a database, allowing for real-time updates to the inventory.
        </p>
            </section>
          </>
        );
      }
export default Projects;
