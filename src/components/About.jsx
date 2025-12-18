import { ArrowRight, Dot } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="flex gap-3 mb-10">
        <img
          src="/pic-portfolio.jpg"
          className="block size-25 rounded-full"
        ></img>
        <div className="relative mt-3">
          <h1 className="text-4xl font-normal text-black/70 dark:text-white">
            Tushar Kumar
          </h1>
          <p className="absolute px-2 py-1 bg-green-200 text-xs text-green-700 rounded-full top-13">
            <span className="pulse-dot mr-2"></span>Available for work
          </p>
        </div>
      </div>
      <div className="max-w-3xl">
        <h1 className="text-5xl text-black/50 dark:text-white font-bold">
          About
        </h1>
        <p className="text-[16px] dark:text-zinc-400 w-full mt-3">
          Hi, I'm Tushar <br />A 3yr student , Learning from solo building and
          seeking for any internship chances developing skills in Modern
          framework by building projects and learning new thing daily so if you
          want to hustle and build along with me{" "}
          <span className="dark:text-white/70 ml-3 hover:text-black/90 dark:hover:text-white hover:cursor-pointer text-black/50">
            Let's talk
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
