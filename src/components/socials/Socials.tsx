import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface Props {
  website: string;
  icon: "github" | "linkedin" | "instagram";
}

const Socials: React.FC<Props> = ({ website, icon }) => {
  const icons = {
    github: {icon: <FaGithub />, alt: 'github icon'},
    linkedin: {icon: <FaLinkedin />, alt: 'linkedin icon'},
    instagram: {icon: <FaInstagram />, alt: 'instagram icon'}
  };

  return (
    <a href={website} target="_blank" rel="noreferrer" className="text-[2.5rem] hover:text-primary-light transition-colors">
      {icons[icon].icon}
    </a>
  );
};

export default Socials;
