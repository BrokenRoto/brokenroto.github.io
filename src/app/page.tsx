import React from "react";
import profile from "../../public/static/profile.jpg";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="container flex py-14 justify-between">
      <div className="flex flex-col justify-center">
        <h1 className="text-yellow text-[5rem] font-bold tracking-wider">
          Welcome
        </h1>
        <h2 className="text-[2rem] max-w-xl">
          My name is Roberto. I&apos;m based in Quito, Ecuador, and I love
          software.
        </h2>
      </div>
      <div>
        <Image className="rounded-full w-full max-w-[450px]" src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default HomePage;
