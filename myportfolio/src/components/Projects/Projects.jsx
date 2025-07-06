import React from 'react';
import './Projects.css';
import projects from '../../data/projects.json';
import Card from './Cards.jsx';
import { getImageUrl } from '../../util';

const Projects = () => {
    return (
          <section id='projects'>
                <h1 className='big-title'>Some Projects</h1>
                <div className='projects-container'>
                     {projects.map((project, id) => (
                          <Card 
                                key={id}
                                img={getImageUrl(project.imageSrc)}
                                title={project.title}
                                description={project.description}
                                   more={project.more}
                                   link={project.link}
                          />
                     ))}
                </div>
          </section>
     );
};

export default Projects;

<script src="animations.js"></script>
