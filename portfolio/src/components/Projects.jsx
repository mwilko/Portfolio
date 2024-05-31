import React from 'react';
import '../styles/Projects.css';
import languagesImg from './images/languages.jpeg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

function Projects() {
  return (
    <>
      <section id="projects-top-body" className="p-10 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="project p-4 bg-white rounded shadow">
            <a href="https://github.com/mwilko/Inventory-Manager">
              <h3 className="text-xl font-bold mb-2">Inventory Manager</h3>
              <p className="text-md">Cross-platform inventory tracking application.</p>
            </a>
          </div>
          <div className="project p-4 bg-white rounded shadow">
            <a href="https://github.com/mwilko/Mobile_Health_App">
              <h3 className="text-xl font-bold mb-2">Mobile Health Application</h3>
              <p className="text-md">Mobile device application which utilizes AI and ML.</p>
            </a>
          </div>
          <div className="project p-4 bg-white rounded shadow">
            <a href="https://github.com/mwilko/API-Bridge">
              <h3 className="text-xl font-bold mb-2">API Bridge</h3>
              <p className="text-md">Client-friendly software interface API which allows for configuring data on their database.</p>
            </a>
          </div>
        </div>
      </section>
      <section id="hero" className="text-center p-10" style={{ backgroundImage: `url(${languagesImg})` }}>
        <h1 className="text-4xl font-bold text-black">Project Details</h1>
      </section>
      <section id="projects-body" className="p-10 bg-white">
        <h2 className="text-3xl font-bold mb-4">Inventory Manager</h2>
        <p className="text-lg">Made using the Flutter framework, released and maintained by Google, I have created an application to manage inventory for clients.
          <br /> The application allows clients to create, update, edit, and delete company stock. The application is cross-platform,
          meaning it can be used on Android and iOS devices not forgetting Mac, Linux, Windows, and Web, it can even run on RaspberryPI if wanted!
          The application is also connected to a database, allowing for real-time updates to the inventory.
        </p>
      </section>
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Project Images</h2>
        <div className="carousel-container">
          <Carousel className="carousel" showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true}>
            <div>
              <img className="carousel-image" src="https://via.placeholder.com/800x400" alt="Project Image 1" />
            </div>
            <div>
              <img className="carousel-image" src="https://via.placeholder.com/800x400" alt="Project Image 2" />
            </div>
            <div>
              <img className="carousel-image" src="https://via.placeholder.com/800x400" alt="Project Image 3" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Projects;
