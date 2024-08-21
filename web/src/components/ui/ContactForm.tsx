import React from 'react';
import { Input } from '@/components/ui/input'; 
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';

const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-white h-full">
      <h2 className="text-4xl font-bold text-center mb-8">
        Contact <span className="text-teal-400">Me</span>
      </h2>
      <form className="max-w-4xl mx-auto space-y-6 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          <Input
            type="text"
            placeholder="First Name"
            className="bg-aboutSectionColor placeholder-gray-400 border-none text-white"
          />
          <Input
            type="text"
            placeholder="Last Name"
            className="bg-aboutSectionColor placeholder-gray-400 border-none text-white"
          />
          <Input
            type="text"
            placeholder="Phone No."
            className="bg-aboutSectionColor placeholder-gray-400 border-none text-white"
          />
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-aboutSectionColor placeholder-gray-400 border-none text-white"
          />
        </div>
        <div className='h-96'>
        <Textarea
          placeholder="Your Message"
          className="bg-aboutSectionColor placeholder-gray-400 border-none text-white h-96"
        />
        </div>
        
        <div className="text-center">
          <Button
            className="bg-teal-400 text-black font-bold py-2 px-8 rounded-full hover:bg-teal-500 transition-colors duration-300"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
