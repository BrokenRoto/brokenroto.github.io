import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="container py-8 flex flex-row justify-between items-center">
      <Link
        className={`font-logo text-[1rem] sm:text-[1.25rem] md:text-[1.8rem] tracking-wider ${styles["custom-link"]} ${styles["custom-link--logo"]}`}
        href="/"
      >
        BrokenRoto
      </Link>
      <ul className="flex flex-row space-x-2 md:space-x-4 items-center text-xs sm:text-base">
        <li className="hover:cursor-pointer">
          <Link href="#about" className={styles["custom-link"]} scroll={false}> 
            About
          </Link>
        </li>
        <li className="hover:cursor-pointer" >
          <Link className={styles["custom-link"]} href="#work" scroll={false}>
            Work
          </Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link href="#contact" className={styles["custom-link"]} scroll={false}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
