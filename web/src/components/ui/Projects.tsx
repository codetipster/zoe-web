import React from 'react'
import { ProjectCard } from './ProjectCard'

function Projects() {

    const projects = [
        { imageSrc: '/images/mobile.png', imageAlt: 'Mobile UI Design', text: 'This mobile design focuses on accessibility and ease of use, featuring a clean layout and vibrant icons to give users a seamless experience' },
        { imageSrc: '/images/ipad2.png', imageAlt: 'Landing Page', text: 'This design incorporates natural tones and a minimalist approach, guiding users through a seamless journey from awareness to action.' },
        { imageSrc: '/images/ipad.png', imageAlt: 'Application Interface Design', text: 'The interface collections here boasts a sleek and modern aesthetic, with clear navigation and interactive elements.' },
      ];

  return (
    <section className="py-12 bg-primaryColor text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our <span className="text-portfolioColorBtn">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} imageSrc={project.imageSrc} imageAlt={project.imageAlt} text={project.text} />
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