"use client";
import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { DockDemo } from "@/components/Dock-bottom";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";

const MainPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-20 items-center justify-center dark:bg-black bg-white">
      <Navbar />
      <div className="self-start text-left min-w-3xl mx-auto mt-40">
        <About />
      </div>
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
