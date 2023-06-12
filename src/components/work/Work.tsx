import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  alt: string;
  title: string;
  link: string;
  description: string;
  technologies: string[];
  className?: string;
}

const Work: React.FC<Props> = ({ image, alt, title, link, description, className, technologies }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="transition-all duration-200 hover:scale-[1.015]">
      <div className={`flex flex-col space-y-4 mb-12 sm:space-y-0 sm:mb-0 sm:grid sm:grid-cols-2 sm:grid-rows-work-layout sm:gap-y-2 sm:gap-x-4 xl:max-w-2xl w-full ${className ??= ''}`}>
        <Image className="row-span-3 min-w-full rounded-lg object-cover h-[225px]" src={image} alt={alt} />
        <h2 className="text-center text-lg sm:text-left font-bold">{title}</h2>
        <p className="text-sm md:text-base">{description}</p>
        <div className="flex space-x-2">
          {technologies.map((tech, i) => (
            <span className="text-sm md:text-base border border-primary-dark rounded-lg py-1 px-2 text-primary-light" key={i}>{tech}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Work;
