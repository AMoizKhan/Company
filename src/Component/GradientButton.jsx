// components/GradientButton.jsx
"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Next.js 13+ me

const GradientButton = ({ children, href, className, type = "button" }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href); // Navigate to the given page
    }
  };
 return (
    <button
      type={type}
      onClick={handleClick}
      className={`
        text-white 
        bg-transparent 
        border-2 border-green-400 
        hover:bg-gradient-to-br hover:from-green-400 hover:to-blue-600
        hover:text-white 
        focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 
        font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default GradientButton;
