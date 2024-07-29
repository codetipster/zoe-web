import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ icon, title, description, link }:any) => {
  return (
    <Card className="bg-aboutSectionColor text-white rounded-2xl border-2 border-transparent hover:border-teal-400 transition-colors duration-300">
      <CardHeader className="flex justify-center items-center p-4 border-b border-gray-600">
        <span className="text-teal-400 text-3xl">{icon}</span>
      </CardHeader>
      <CardContent className="p-6 flex flex-col justify-between">
        <div className='flex flex-col justify-between m-4'>
          <h3 className="text-xl text-center font-bold mb-4">{title}</h3>
          <p className="text-gray-400 mb-6 text-center h-full">{description}</p> 
        </div>
        <div className="text-center">
          <Button className="bg-teal-400 text-black font-bold py-2 px-4 rounded-full hover:bg-teal-500 transition-colors duration-300">{link}</Button>
        </div> 
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
