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
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 0.95 }}
      className="realtive h-20 w-[55%] fixed top-8 z-20 border border-none rounded-sm bg-[#080808]/50 backdrop-blur-sm text-2xl font-serif text-white/50 p-2"
    >
      <div className="flex items-center justify-around absolute top-3 bottom-2 gap-4">
        {navItems.map((item, idx) => (
          <button
            onClick={() => router.push(`${item.href}`)}
            class="w-28 h-16 text-white cursor-pointer text-base font-bold 
                         text-center border border-none bg-transparent
                         shadow-[3px_3px_6px_rgb(34, 34, 34)] transition-transform duration-300 
                         ease-in-out rounded-[10px] hover:bg-[#0c0c0c] hover:text-white"
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="absolute right-5 bottom-6 m-2 h-5 w-5">
        {dark ? (
          <Sun
            className="hover:cursor-pointer hover:text-white hover:scale-105"
            onClick={() => toggleDarkMode()}
          />
        ) : (
          <Moon
            className="hover:cursor-pointer hover:text-white hover:scale-105"
            onClick={() => toggleDarkMode()}
          />
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
