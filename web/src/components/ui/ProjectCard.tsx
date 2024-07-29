import React from 'react'
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

export const ProjectCard = ({ imageSrc, imageAlt }: any) => {
  return (
    <Card className="bg-aboutSectionColor text-white rounded-2xl border-none hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4 flex justify-center items-center">
        <Image src={imageSrc} alt={imageAlt} width={300} height={200} className="rounded-md"/>
      </CardContent>
    </Card>
  )
}
