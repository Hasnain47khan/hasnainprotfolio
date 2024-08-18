// 'use client'; directive ensures this is a Client Component
'use client';

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 flex flex-col lg:flex-row items-center lg:items-start justify-between">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col items-center lg:items-start justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] relative my-20 z-10">
        <p className="uppercase tracking-widest text-xs text-center lg:text-left text-blue-100 max-w-80">
          Dynamic Web Magic with Next.js
        </p>

        {/**
         *  Link: https://ui.aceternity.com/components/text-generate-effect
         *
         *  change md:text-6xl, add more responsive code
         */}
        <TextGenerateEffect
          words="Transforming Concepts into Seamless User Experiences"
          className="text-center lg:text-left text-[40px] md:text-5xl lg:text-6xl"
        />

        <p className="text-center lg:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hi! I&apos;m Hasnain, a Full Stack Web Developer based in <br /> Peshawar, Pakistan.
        </p>

        <a href="#projects" className="mb-8 lg:mb-0">
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Rotating dotted circle with fixed image */}
      <div className="py-20 hidden lg:flex flex-col relative lg:mt-0 lg:ml-8 justify-center mx-auto">
        <div className="relative w-72 h-72">
          {/* Rotating wrapper */}
          <div
            className="absolute inset-0 rounded-full border-4 border-dotted border-gray-400"
            style={{
              animation: 'rotate 15s linear infinite', // Adjust timing as needed
              borderRadius: '70%',
              borderColor: 'rgba(204, 204, 204, 0.7)', // Adjust border color for visibility
            }}
          />
          {/* Fixed image inside the rotating circle */}
          <img
            src="/mypic.jpg"
            alt="Profile"
            className=" inset-0 rounded-full w-full h-full object-cover"
            style={{
              zIndex: 1, // Ensure image is above rotating border
            }}
          />
        </div>
      </div>

      {/* Inline CSS for animation */}
      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
