// pages/Projects.jsx
import React from 'react';
import Project from '../components/Project';
import projectsData from '../data/projects.json';

function Projects() {
 return (
    <div>
      {projectsData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
 );
}

export default Projects;