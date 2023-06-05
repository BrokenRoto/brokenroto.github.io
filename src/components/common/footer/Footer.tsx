import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <nav className="py-8 border-t mt-20 border-secondary">
      <ul className="flex flex-row container justify-around max-w-lg">
        <li><a href='https://github.com/BrokenRoto' target="_blank" rel="noreferrer" className="hover:text-primary-light">GitHub</a></li>
        <li><a href='https://www.instagram.com/rober.cardenasm/' target="_blank" rel="noreferrer" className="hover:text-primary-light">Instagram</a></li>
        <li><a href='https://www.linkedin.com/in/jroberto-cardenasm/' target="_blank" rel="noreferrer" className="hover:text-primary-light">LinkedIn</a></li>
      </ul>
    </nav>
  );
};

export default Footer;
