import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  const projects = [
    {
      name: "AI Mentor App",
      details: "Personalized task planner with AI integration",
    },
    {
      name: "E-Commerce Site",
      details: "Next.js multi-currency store with Stripe payments",
    },
    {
      name: "Chat App",
      details: "Real-time messaging with Socket.IO & MongoDB",
    },
    {
      name: "Portfolio Website",
      details: "Modern responsive developer portfolio",
    },
    {
      name: "Airbnb Clone",
      details: "Next.js + Tailwind CSS booking platform",
    },
    {
      name: "Twitter Clone",
      details: "Social feed UI with post & like features",
    },
    {
      name: "Learning Tracker",
      details: "Tracks study progress with AI suggestions",
    },
    {
      name: "Weather App",
      details: "Displays real-time weather with API integration",
    },
    {
      name: "Expense Tracker",
      details: "Dashboard for managing daily expenses",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center">
      <Navbar />
    </div>
  );
};

export default page;
