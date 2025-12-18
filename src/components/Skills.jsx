import React from "react";
import TechUsed from "./techUsed";

const Skills = () => {
  return (
    <div className="h-30 max-w-3xl ">
      <div className="flex flex-wrap gap-4 mt-3">
        {allTechs.map((name, idx) => (
          <TechUsed tech={`${name}`} key={idx} id={idx} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

const allTechs = [
  "React.Js",
  "Node.Js",
  "Express.Js",
  "JS",
  "Html",
  "Css",
  "MongoDb",
  "Supabase",
  "Next.js",
  "Convex",
  "Aws(EC2)",
  "Docker",
  "Kubernetes",
  "CICD",
  "Github Actions",
];
