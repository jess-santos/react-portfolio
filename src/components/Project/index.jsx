// components/Project.jsx
import React from 'react';

function Project({ project }) {
 return (
    <div>
      <h2>{project.title}</h2>
      <a href={project.deployedLink}>Deployed Version</a>
      <a href={project.githubLink}>GitHub Repository</a>
      <img src={project.image} alt={project.title} />
    </div>
 );
}

export default Project;