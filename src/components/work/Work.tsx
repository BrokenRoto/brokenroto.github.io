import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
    <a href={link} target="_blank" rel="noreferrer">
      <div className={`grid grid-cols-2 grid-rows-work-layout gap-y-2 gap-x-4 max-w-2xl ${className ??= ''}`}>
        <Image className="row-span-3 min-w-full rounded-lg object-cover h-[225px]" src={image} alt={alt} />
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{description}</p>
        <div className="flex space-x-2">
          {technologies.map((tech, i) => (
            <span className="border-2 rounded-md py-1 px-2" key={i}>{tech}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Work;
