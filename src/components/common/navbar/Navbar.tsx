import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="container py-8 flex flex-row justify-between items-center">
      <Link className="hover:text-primary-light font-logo text-[1.8rem] tracking-wider" href="/">BrokenRoto</Link>
      <ul className="flex flex-row space-x-4 items-center">
        <li className="hover:text-primary-light cursor-pointer">
          <Link href="/work">Work</Link>
        </li>
        <li className="hover:text-primary-light cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-primary-light cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
