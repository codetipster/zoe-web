import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const About = () => {
    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center py-16 px-8 md:py-24 md:px-16 bg-darkBlue">
          {/* Image Section */}
            <div className="flex-1 flex justify-center mb-4 md:mb-0  h-100 mx-auto mr-12">
                <div className="relative">
                <div className="rounded-full  w-70 h-74 border-8 border-teal-400 flex justify-center items-center ">
                    <div className="relative -mt-14 w-72 h-80">
                        <Image
                            src="/images/zoe.png" 
                            alt="Chijioke Uzoma-Onuoha"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-full"
                        />
                    </div>
                </div>
                </div>
            </div>
            
    
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left text-white ">
            <h2 className="text-4xl font-bold mb-4">About <span className="text-teal-400">Me</span></h2>
            <h3 className="text-xl font-semibold mb-4">UI/UX Designer</h3>
            <p className="text-lg mb-6">
              A passionate <span className="text-teal-400">UI/UX designer</span> with a knack for creating user-friendly and visually appealing digital interfaces. With years of experience in product research, management, and development. I specialize in transforming complex ideas into intuitive and engaging designs and strongly believe in the power of simplicity that is always the result of a user-centered design process. My process involves thorough research, wireframing, prototyping, and constant iteration to ensure the best user experience. <br/>  
            </p>
       
            <p>
            Are you looking to hire an experienced designer who can help you create a product that is both functional and beautiful? Let&apos;s work together!
            </p>
            
            <Button className="bg-portfolioColorBtn text-black mt-7 hover:bg-teal-500 transition-colors duration-300">Contact Me</Button>
           
          </div>
        </section>
      );
}

export default About