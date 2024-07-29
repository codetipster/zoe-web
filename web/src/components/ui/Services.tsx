import React from 'react'
import ServiceCard from './ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush, faSearch, faDraftingCompass } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section className="container mx-auto py-16 px-8 md:py-24 md:px-16 bg-darkBlue">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Our <span className="text-teal-400">Services</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4">
        <ServiceCard
          icon={<FontAwesomeIcon icon={faBrush} />}
          title="UI Design"
          description="Bring your vision to life with visually stunning and user-friendly interfaces. I focus on creating designs that are not only aesthetically pleasing but also intuitive and accessible, ensuring a seamless user experience across all devices."
          link="Read More"
        />
        <ServiceCard
          icon={<FontAwesomeIcon icon={faSearch} />}
          title="UX Research"
          description="Gain deep insights into your users' needs and behaviors through comprehensive research methods, including interviews, surveys, and usability testing. This foundational step ensures your product aligns with user expectations and solves real problems."
          link="Read More"
        />
        <ServiceCard
          icon={<FontAwesomeIcon icon={faDraftingCompass} />}
          title="WireFraming and Prototyping"
          description="Transform ideas into tangible blueprints with wireframes and prototypes. I create detailed and interactive prototypes that allow you to visualize the user journey and refine the design before development begins."
          link="Read More"
        />
      </div>
    </section>
  )
}

export default Services