import React from "react";

const TechUsed = ({ tech }) => {
  return (
    <div
      className="border-1 border-dashed h-auto rounded-md px-2 py-1 w-auto dark:bg-black/30 text-zinc-400 text-shadow-white text-xs
    dark:hover:bg-white/10 transform bg-white hover:cursor-pointer"
    >
      {tech}
    </div>
  );
};

export default TechUsed;
