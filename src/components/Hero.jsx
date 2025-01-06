import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-5" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <h1 className="text-5xl font-bold text-white">Welcome to Solene</h1>
      <p className="text-xl text-white mt-4">A Minimalistic Design</p>
      <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200">Get Started</button>
    </section>
  );
};

export default Hero;