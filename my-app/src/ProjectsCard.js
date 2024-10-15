// Import necessary packages in React
import React from 'react';
import ReactDOM from 'react-dom/client';
import jsonData from "./projects.json"; // Adjust the path as necessary
import './App.css'; 

const Projects = () => {
  const projectData = jsonData;

  return (
    <div className="overall_wrapper">
        <section id= "projects">
            <div className="wrapper"></div>
            {/* Previous sections (Profile, About Me, Technologies, etc.) */}
            <div className="container-sep"></div>
            {/* Project Cards Section */}
            <div className="projects-wrapper">
                <h1>EXPERIENCES & PROJECTS</h1>
                {projectData.ProjectsArray.map((item, index) => (
                <div className="project-card" key={index}>
                    <h2>{item.Title}</h2>
                    <h3>{item.Date}</h3>

                    <div className="top-part">
                    <img src={item.Image} alt={item.Title} />
                    <p>{item.About}</p>
                    </div>
                    <div className="links">
                    {item.Links.map((link, linkIndex) => (
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`button${linkIndex + 1}`}
                        key={linkIndex}
                    >
                        {link.text}
                    </a>
                    ))}
                </div>
                </div>
                ))}
            </div>
            <br /><br />
      </section>
    </div>
  );
};

export default Projects;
