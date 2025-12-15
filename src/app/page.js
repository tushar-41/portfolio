"use client";
import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { DockDemo } from "@/components/Dock-bottom";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const MainPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-20 items-center justify-center dark:bg-black bg-white">
      <main className="flex gap-20 items-center justify-center mt-10">
        {/* <Navbar /> */}
        <div className="w-[30%] h-auto">
          <div className="mt-50">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-5xl font-bold font-sans bg-gradient-to-r from-purple-700 to-blue-400 text-transparent bg-clip-text "
            >
              Hello
              <span className="text-5xl text-purple-600 animate-pulse">👋</span>
              I'm a Passionate FullStack Developer,I can design build and ship
              your Website
            </motion.h1>
            <p className="text-xs text-white my-5 w-full bg-zinc-700 p-1 border border-gray-700 rounded-sm">
              Contact for reshaping your website and design and making new
              website
            </p>
          </div>
        </div>
        {/* MY image */}
        <div className="h-[300px] w-[250px] bg-white rounded-2xl overflow-clip mt-50">
          <img
            src="/pic-portfolio.jpg"
            className="block w-full h-full object-cover bg-cover bg-no-repeat"
          ></img>
        </div>
      </main>
      <section id="projects" className="dark:text-white min-w-3xl">
        <Projects />
      </section>
      <section className="min-w-3xl" id="skills">
        <h1 className="text-5xl font-bold">Skills</h1>
        <Skills />
      </section>
      <section className="h-50" id="contact"></section>
      <div className="fixed bottom-8">
        <DockDemo />
      </div>
    </div>
  );
};

export default MainPage;
