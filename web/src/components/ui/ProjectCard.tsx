import React from 'react'
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { FaLink } from 'react-icons/fa';

export const ProjectCard = ({ imageSrc, imageAlt, text }: any) => {
  return (
    <Card className="relative bg-aboutSectionColor text-white rounded-2xl border-none hover:shadow-lg transition-shadow duration-300 w-[25%] overflow-hidden group">
      <CardContent className="p-4 flex justify-center items-center bg-aboutSectionColor  h-full rounded-lg">
        <Image src={imageSrc} alt={imageAlt} width={200} height={200} className="rounded-md"/>
      </CardContent>

      {/* Slide-Up Effect Overlay */}
      <div className="absolute inset-0 text-center p-2 bg-gradient-to-t from-white/60 to-teal-400/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-center items-center rounded-2xl">
        <p className="text-aboutSectionColor font-bold text-2xl mb-4">{imageAlt}</p>
        <p className='mt-1 text-black font-semibold'>{text}</p>
        <FaLink className="text-aboutSectionColor text-2xl mt-4 cursor-pointer" />
      </div>
    </Card>
  )
}
