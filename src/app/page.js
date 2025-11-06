"use client";
import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { spring } from "motion";
import { NumberTicker } from "@/components/ui/number-ticker";
import { useDarkMode } from "@/darkModeContext/DarkMode";
import { Moon, Sun } from "lucide-react";

const MainPage = () => {
  const [timer, setTimer] = useState(false);

  const { dark, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 3000);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact me", href: "/contact" },
    { name: "Projects", href: "/projects" },
  ];

  const skills = [
    { name: "ReactJs", icon: "reactjs" },
    { name: "Nodejs", icon: "nodejs" },
  ];

  if (!timer) {
    return (
      <main className="min-h-screen w-full dark:bg-black flex justify-center items-center bg-white">
        <NumberTicker
          value={100}
          className="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
        />
      </main>
    );
  } else
    return (
      <main className="min-h-screen w-full flex gap-20 items-center justify-center dark:bg-black bg-white">
        <motion.nav
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ scale: 0.95 }}
          transition={{ scale: spring }}
          className="realtive h-12 w-[70%] fixed top-3 z-20 border border-none rounded-sm bg-[#080808]/50 backdrop-blur-sm text-2xl font-serif text-white/50 p-2"
        >
          <div className="absolute right-5 bottom-2 m-2 h-5 w-5">
            {dark ? (
              <Sun onClick={() => toggleDarkMode()} />
            ) : (
              <Moon onClick={() => toggleDarkMode()} />
            )}
          </div>
        </motion.nav>

        <div className="w-[30%] h-auto">
          <div className="p-5">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="animate-pulse duration-100 text-5xl font-bold font-sans bg-gradient-to-r from-purple-700 to-blue-400 text-transparent bg-clip-text "
            >
              I'm a Passionate FullStack Developer,I can design build and ship
              your Website
            </motion.h1>
            <p className="text-xs text-neutral-400 my-5 w-full bg-zinc-700 p-1 border border-gray-700 rounded-sm">
              Contact for reshaping your website and design and making new
              website
            </p>
          </div>
        </div>
        {/* MY image */}

        <motion.img
          src="/pic-portfolio.jpg"
          className="bg-cover bg-no-repeat h-[50%] w-auto shadow-2xl animate-pulse shadow-white rounded-2xl"
        ></motion.img>

        {/* Projects links */}
      </main>
    );
};

export default MainPage;
