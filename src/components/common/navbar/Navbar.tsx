import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="container py-8 flex flex-row justify-between">
      <Link className="hover:text-primary-light" href="/">Roberto Cárdenas - Developer</Link>
      <ul className="flex flex-row space-x-4">
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
