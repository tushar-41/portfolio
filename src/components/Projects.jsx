import React from "react";
import ProjectCard from "./ProjectCard";
import { LocaleRouteNormalizer } from "next/dist/server/normalizers/locale-route-normalizer";

const Projects = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold dark:text-white text-black/30 w-full">
        Projects
      </h1>
      <div className="md:grid md:grid-cols-2 gap-2">
        <ProjectCard
          name={"Cozysphere"}
          description={
            "An airbnb like place booking and listing website used by travellers"
          }
        />
        <ProjectCard
          name={"Wise money"}
          description={
            "An real-time expense tracking website based on Next.js and Convex used for tracking the expenses of the user."
          }
        />
        <ProjectCard
          name={"TTT"}
          description={
            "Game website for fun and some good time after working hard for the job and all."
          }
        />
        <ProjectCard
          name={"Agentix"}
          description={
            "Agentix is the website for the user to automate their day to day work like emails and some important things ."
          }
        />
        <ProjectCard
          name={"Tradex"}
          description={
            "TradeX is the real time stock trading website used by the traders to trade their money.."
          }
        />
        <ProjectCard
          name={"FlowX"}
          description={
            "FlowX is the automation website for the bussinesses to automate their major tasks using flowX."
          }
        />
      </div>
    </div>
  );
};

export default Projects;
