import React, { Fragment } from "react";
import profile from "../../public/static/profile.webp";
import Image from "next/image";
import { Work } from "@/components/work";
import transformar from "../../public/static/work/transformar.webp";
import himchari from "../../public/static/work/himchari.webp";
import descubreYa from "../../public/static/work/descubreya.webp";
import sinisterVacations from "../../public/static/work/sinister-vacations.webp";
import disturbingHome from "../../public/static/work/disturbing-home.webp";
import { socialLinks, workLinks } from "@/constants/links";
import { HeroButton } from "@/components/heroButton";
import Socials from "@/components/socials/Socials";
import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";

const HomePage = () => {
  return (
    <Fragment>
      <div className="flex flex-col justify-center min-h-full-minus-nav-mobile md:min-h-full-minus-nav">
        <div className="container flex flex-col md:flex-row justify-between md:items-center lg:py-16">
          <div className="flex flex-col justify-center order-1">
            <h1 className="animate-typing overflow-hidden text-secondary text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold tracking-wider">
              Welcome
            </h1>
            <h2 className="text-[1rem] max-w-[300px] sm:max-w-xl sm:text-[1.5rem] lg:text-[2rem]">
              My name is Roberto. I&apos;m based in Quito, Ecuador, and I love
              software.
            </h2>
            <div className="flex flex-col mt-6 sm:mt-9 md:block md:space-x-3 space-y-3">
              <HeroButton
                href="#contact"
                text="Let's Talk"
                className="text-sm sm:text-md md:text-xl max-w-[175px] sm:max-w-[200px] md:max-w-none"
                inverted
              />
              <HeroButton
                href="#work"
                text="See Portfolio"
                className="text-sm sm:text-md md:text-xl max-w-[175px] sm:max-w-[200px] md-max-w-none"
              />
            </div>
          </div>
          <div className="order:1 md:mr-20">
            <Image
              priority
              className="my-6 md:mb-0 rounded-full w-full max-w-[200px] sm:max-w-[250px] md:max-w-[400px] shadow-lg mx-auto"
              src={profile}
              alt="profile"
            />
          </div>
        </div>
        <div className="text-[2rem] md:text[3rem] flex justify-center my-10 md:mt-28 md:mb-12 hover:text-primary-light active:text-primary-light transition-colors">
          <Link href="#about">
            <SlArrowDown />
          </Link>
        </div>
      </div>
      <div
        id="about"
        className="bg-secondary text-primary py-16 flex flex-col justify-center mx-[-1.5rem] md:px-[-2.5rem] lg:mx-[-5rem] xl:mx-[-6rem]"
      >
        <div className="px-8 md:px-0 container text-center">
          <h3 className="text-[2rem] lg:text-[3rem] font-bold">Let me introduce myself.</h3>
          <div className="text-center text-xl lg:text-3xl lg:text-left space-y-12 lg:space-y-24 my-16">
            <div className="flex justify-end items-center">
              <span className="hidden md:block text-primary-light text-[3rem] pr-12">
                &#8226;
              </span>
              <p className="max-w-xl lg:max-w-3xl">
                I am a{" "}
                <span className="text-primary-light font-semibold">
                  Computer Science Engineer
                </span>{" "}
                with a passion for Software and Web Development.
              </p>
            </div>
            <div className="flex justify-end items-center">
              <span className="hidden md:block text-primary-light text-[3rem] pr-12">
                &#8226;
              </span>
              <p className="max-w-xl lg:max-w-3xl">
                Dedicated to{" "}
                <span className="text-primary-light font-semibold">
                  continuous improvement
                </span>
                , my drive is translating ideas into practical and beautiful
                solutions through code.
              </p>
            </div>

            <div className="flex justify-end items-center">
              <span className="hidden md:block text-primary-light text-[3rem] pr-12">
                &#8226;
              </span>
              <p className="max-w-xl lg:max-w-3xl">
                I value{" "}
                <span className="text-primary-light font-semibold">
                  clean code
                </span>
                , user-friendly design, seamless functionality, and exceptional
                user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="work" className="container mt-20 mb-36 md:mb-56 pt-8">
        <h3 className="text-[2rem] md:text-[3rem] font-bold mb-10">Featured Work</h3>
        <div className="flex flex-col space-y-6 md:space-y-8 xl:space-y-0 xl:grid xl:grid-cols-2 xl:gap-x-16 xl:gap-y-16">
          <Work
            alt="transformar"
            description="Transformar gathers information about the bioeconomy potential in Latin America and the Caribbean by identifying opportunities to utilize and transform biomass into valuable products and services."
            technologies={["React", "SemanticUI"]}
            image={transformar}
            link={workLinks.transformar}
            title="Transformar"
          />
          <Work
            alt="himchari"
            description="Mobile app for Himchari Dojang, a taekwondo academy in Quito, Ecuador. It's goal is to automate processes and provide a platform for students to track their progress, access schedules and resources."
            technologies={["Ionic", "Firebase", "React"]}
            image={himchari}
            link={workLinks.himchari}
            title="Himchari Mobile"
          />
          <Work
            alt="descubreya"
            description="Mobile application for listing restaurants and entertainment venues with the aim of providing exposure to small and medium-sized businesses."
            technologies={["Ionic", "Firebase", "Angular"]}
            image={descubreYa}
            link={workLinks.descubreya}
            title="Descubre Ya!"
          />
          <Work
            alt="sinister vacations"
            description="Unleash chaos in a stranded paradise turned nightmare. Battle undead horrors, navigate a hidden lab, and fight for survival in this intense First Person Shooter."
            technologies={["Unity", "C#", "Game Design"]}
            image={sinisterVacations}
            link={workLinks.sinisterVacations}
            title="Sinister Vacations"
          />
          <Work
            alt="disturbing home"
            description="Prepare to be captivated by the unsettling atmosphere of 'Disturbing Home VR.' Experience the suspense of a haunting virtual reality horror game as you navigate an ominous house and uncover hidden clues."
            technologies={["Unity", "C#", "Virtual Reality"]}
            image={disturbingHome}
            link={workLinks.disturbingHome}
            title="Disturbing Home VR"
          />
        </div>
      </div>

      <div id="contact" className="container mb-36 sm:mb-56">
        <h3 className="text-[2rem] font-bold text-center mb-5">Get in Touch</h3>
        <div className="px-8 max-w-2xl mx-auto text-center border rounded-3xl py-16">
          <h4 className="text-xl">
            Seeking to work together or have any questions?
          </h4>
          <HeroButton
            href={`mailto:${socialLinks.email}`}
            text="Email me!"
            className="my-8"
          />
          <h4 className="text-lg mb-4">Or reach out!</h4>
          <div className="flex justify-center space-x-4">
            <Socials icon="github" website={socialLinks.github} />
            <Socials icon="linkedin" website={socialLinks.linkedin} />
            <Socials icon="instagram" website={socialLinks.instagram} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
