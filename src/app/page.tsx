import React, { Fragment } from "react";
import profile from "../../public/static/profile.jpg";
import Image from "next/image";

const HomePage = () => {
  return (
    <Fragment>
      <div className="container flex my-32 justify-between">
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
          <Image
            className="rounded-full w-full max-w-[450px] shadow-lg"
            src={profile}
            alt="profile"
          />
        </div>
      </div>
      <div className="bg-yellow text-blue py-14">
        <div className="container text-center">
          <h3 className="text-[2rem] font-bold mb-6">
            Let me introduce myself.
          </h3>
          <p className="text-2xl max-w-2xl mx-auto">
            I am a Computer Science Engineer with a passion for Software and Web
            Development. Dedicated to continuous improvement, my drive is
            translating ideas into practical and beautiful solutions through
            code.
          </p>
        </div>
      </div>

      <div className="container my-20">
        <h3 className="text-[2rem] font-bold mb-6">Featured Work</h3>
        <span>View More -&gt;</span>
      </div>
    </Fragment>
  );
};

export default HomePage;
