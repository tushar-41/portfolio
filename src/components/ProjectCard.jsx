import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import TechUsed from "./techUsed";

const ProjectCard = ({ name, description, techStack }) => {
  return (
    <div
      className="
        group relative max-w-sm rounded-xl
        border border-neutral-300 dark:border-neutral-700
        bg-white dark:bg-neutral-900
        p-4 my-6
      "
    >
      {/* Image Section */}
      <div
        className="
          h-40 w-full rounded-lg
          bg-neutral-200 dark:bg-neutral-800
          overflow-hidden
        "
      >
        <div
          className="
            h-full w-full
            bg-gradient-to-br from-cyan-400/30 to-blue-500/30
            transition-transform duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h1 className="text-sm font-semibold text-neutral-700 dark:text-white">
          {name}
        </h1>

        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
      </div>
      {/* Tech used */}
      <div className="flex flex-wrap gap-2 my-2">
        <TechUsed tech={"Node.js"} />
        <TechUsed tech={"JavaScript"} />
        <TechUsed tech={"Express.Js"} />
        <TechUsed tech={"Html"} />
        <TechUsed tech={"BootStrap"} />
        <TechUsed tech={"Css"} />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <Link href="https://github.com/tushar-41" target="_blank">
          <Button
            className="
              text-xs px-3 py-1 text-white
              bg-neutral-700 hover:bg-neutral-800
              dark:bg-neutral-800 dark:hover:bg-neutral-700
            "
          >
            GitHub
          </Button>
        </Link>

        <Link href="#">
          <Button
            className="
              text-xs px-4 py-1
              bg-black/30 hover:bg-black/50
              text-white
            "
          >
            Live
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
