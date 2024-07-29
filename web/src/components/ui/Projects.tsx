import React from 'react'
import { ProjectCard } from './ProjectCard'

function Projects() {

    const projects = [
        { imageSrc: '/images/project1.png', imageAlt: 'Project 1' },
        { imageSrc: '/images/project2.png', imageAlt: 'Project 2' },
        { imageSrc: '/images/project3.png', imageAlt: 'Project 3' },
      ];

  return (
    <section className="py-12 bg-primaryColor text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our <span className="text-portfolioColorBtn">Projects</span></h2>
        <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} imageSrc={project.imageSrc} imageAlt={project.imageAlt} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-teal-400 text-black font-bold py-2 px-6 rounded-full hover:bg-teal-500 transition-colors duration-300">See More</button>
        </div>
      </div>
    </section>
  )
}

export default Projects