"use client"
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Typed, { ReactTyped } from 'react-typed';

const HeroSection = () => {
    return (
        <div className="container  text-white mx-auto pb-8 h-full">
          <div className="container flex flex-col mx-auto md:flex-row items-center p-4 h-full w-full">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left md:mb-0  p-8" >
              <h1 className="text-2xl font-bold">Hello, It&rsquo;s Me</h1>
              <h2 className="text-5xl font-bold mt-8">Chijioke Uzoma-Onuoha</h2>
              <p className="text-3xl font-bold mt-8">
                And I&rsquo;m a <span className="text-portfolioColorBtn font-bold">
                       <ReactTyped
                  strings={['Product Designer', 'UI/UX Designer']}
                  typeSpeed={100}
                  backSpeed={90}
                  backDelay={1500}
                  loop
                 />
                </span>
              </p>
              <p className="text-lg mt-6">
              who has a passion for creating unique and innovative designs. I have a keen eye for detail and a deep understanding of the principles of design, which allows me to create products that are both functional and aesthetically pleasing.
              </p>
                {/* Social Media Icons */}
              <div className="flex justify-start mt-10 space-x-20 text-portfolioColorBtn ">
                <a href="https://www.linkedin.com/in/chijioke-uzoma-onuoha-b7236b1a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-teal-200">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-transparent hover:border-teal-400 transition-colors duration-300">
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl"/>
                  </div>
                </a>
                <a href="https://x.com/female_chijioke?s=21&t=wf8zhy6IqsHwLkq04lPhxA" className="hover:text-teal-200">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-transparent hover:border-teal-400 transition-colors duration-300">
                    <FontAwesomeIcon icon={faXTwitter} className="text-2xl"/>
                  </div>
                </a>
                <a href="https://www.instagram.com/cjay_zoe?igsh=a29icXN4bWxidGF5&utm_source=qr" className="hover:text-teal-200">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-transparent hover:border-teal-400 transition-colors duration-300">
                    <FontAwesomeIcon icon={faInstagram} className="text-2xl"/>
                  </div>
                </a>
                <a href="https://wa.link/smy7np" className="hover:text-teal-200">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-transparent hover:border-teal-400 transition-colors duration-300">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-2xl"/>
                  </div>
                </a>
             </div>
            </div>
    
            {/* Image Section */}
            <div className=" items-center justify-center space-y-4 sm:pt-24 w-6/12 bg-[url('/images/sssurface-9.svg')]">
              <Image
                src="/images/zoe.png"
                alt="Chijioke Uzoma-Onuoha"
                width={400}
                height={400}
                className="rounded-lg mt-10 mx-auto "
              /> 
            </div>  
            
          </div>         
        </div>
      );
}

export default HeroSection