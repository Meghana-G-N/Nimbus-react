import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img src="/path-to-about-image.jpg" alt="About" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700 mb-4">
            Solene is a minimalistic design-focused platform offering stunning visuals and high-quality services.
          </p>
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;