import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <nav className="py-8 border-t border-secondary">
      <ul className="flex flex-row container justify-around max-w-lg">
        <Link href="#home" className="hover:text-primary-light">Home</Link>
        <Link href="#about" className="hover:text-primary-light">About</Link>
        <Link href="#work" className="hover:text-primary-light">Work</Link>
      </ul>
    </nav>
  );
};

export default Footer;
