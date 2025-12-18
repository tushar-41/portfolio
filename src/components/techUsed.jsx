"use client";
import React from "react";
import * as motion from "motion/react-client";
import { easeIn, easeOut } from "motion";

const TechUsed = ({ tech, id }) => {
  return (
    <motion.div
      initial={{
        x: 10 + id,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay: id / 10,
        ease: easeOut,
      }}
      exit={{
        opacity: 0,
      }}
      className="border-1 border-dashed h-auto rounded-md px-2 py-1 w-auto dark:bg-black/30 text-zinc-400 text-shadow-white text-xs
    dark:hover:bg-white/10 transform bg-white hover:cursor-pointer"
    >
      {tech}
    </motion.div>
  );
};

export default TechUsed;
