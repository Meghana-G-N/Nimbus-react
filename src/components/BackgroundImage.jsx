import React from "react";
import backgroundImage from "./images/photo_2025-01-06_16-54-09.jpg"; 

const BackgroundSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use imported image here
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-white">
        Welcome to Solene
      </h1>
      <p className="text-lg md:text-xl text-white mt-4">
        A Minimalistic Design
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200">
        Get Started
      </button>
    </div>
  );
};

export default BackgroundSection;
