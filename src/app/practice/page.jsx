import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import React from "react";

const page = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact me", href: "/contact" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <div className="flex items-center justify-center gap-4 ">
        {navItems.map((item, idx) => (
          <Button
            key={idx}
            className={`h-10 w-25 p-20 scale-100 hover:cursor-pointer bg-white/20 backdrop-blur-sm hover:scale-120 transition-all duration-300 active:-translate-y-1`}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <RainbowButton>Hello</RainbowButton>
    </div>
  );
};

export default page;
