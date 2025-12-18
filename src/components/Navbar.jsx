"use client";
import React from "react";
import * as motion from "motion/react-client";
import { useDarkMode } from "@/darkModeContext/DarkMode";
import { Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { dark, toggleDarkMode } = useDarkMode();
  const router = useRouter();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact me", href: "/contact" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 0.95 }}
      className="realtive h-auto w-[55%] fixed top-8 z-20 border border-neutral-700 rounded-full bg-white text-black/50 backdrop-blur-lg text-2xl dark:bg-black/50 font-serif py-2 dark:border-white/30 dark:border-1"
    >
      <div className="flex items-center gap-5 px-2">
        <img
          src="/pic-portfolio.jpg"
          className="block size-10 rounded-full"
        ></img>
        {navItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => router.push(`${item.href}`)}
            className="hover:text-black hover:cursor-pointer dark:text-white/50 dark:hover:text-white"
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="absolute right-5 bottom-5 m-2 size-3">
        {dark ? (
          <Sun
            className="hover:cursor-pointer hover:text-white hover:scale-105 dark:scale-100 transfor-transtion duration-300 scale-0 opacity-0 dark:opacity-100 text-white/50"
            onClick={() => toggleDarkMode()}
          />
        ) : (
          <Moon
            className="hover:cursor-pointer text-black/40 hover:text-black hover:scale-105 dark:scale-0 transform-transtion duration-400 scale-100 opacity-100 dark:opacity-0"
            onClick={() => toggleDarkMode()}
          />
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
