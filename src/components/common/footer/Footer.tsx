import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <nav className="py-8 border-t border-secondary flex flex-col relative">
      <p className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs text-center text-primary-lighter">Powered by Next.js and Tailwind CSS</p>
      <ul className="flex flex-row container justify-around max-w-lg">
        <Link href="/" className="hover:text-primary-light">Home</Link>
        <Link href="#about" className="hover:text-primary-light">About</Link>
        <Link href="#work" className="hover:text-primary-light">Work</Link>
      </ul>
    </nav>
  );
};

export default Footer;
