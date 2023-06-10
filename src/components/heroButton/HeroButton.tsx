import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  href: string;
  className?: string;
  inverted?: boolean;
}

const HeroButton: React.FC<Props> = ({ text, href, className, inverted }) => {
  return (
    <Link
      href={href}
      className={`${
        inverted
          ? "text-secondary bg-primary-dark border-primary-dark hover:bg-[#5a7fa3] hover:border-[#5a7fa3] "
          : "text-primary-lighter hover:shadow-inner-lighter hover:text-primary"
      } transition duration-500 rounded-[1.25rem] py-3 px-6 border-2 inline-block ${(className ??=
        "")}`}
    >
      {text}
    </Link>
  );
};

export default HeroButton;
