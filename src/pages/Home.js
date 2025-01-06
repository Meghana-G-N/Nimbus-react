import React from "react";
import Gallery from "../components/Gallery";
const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: "url('https://www.jimdo.com/blog/wp-content/uploads/2019/04/Header-Wedding-1024x512.jpg')", 
      }}
    >


      {/* Logo Section */}
      <div className="absolute top-5 left-5">
        <img
          src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/logo-solene-mob-1.png" 
          alt="Logo"
          className="h-16 w-auto"
        />
      </div>

    
      <div className="absolute top-5 left- flex gap-6 text-orange-600 font-medium">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Pages
        </a>
        <a href="#" className="hover:underline">
          Portfolio
        </a>
        <a href="#" className="hover:underline">
          Proofing Gallery
        </a>
        <a href="#" className="hover:underline">
          Blog
        </a>
        <a href="#" className="hover:underline">
          Shop
        </a>
        <a href="#" className="hover:underline">
          Cart (0)
        </a>
        <a href="#" className="hover:underline">
          Info
        </a>
      </div>

      {/* Main Content */}
      <div>
        <h1 className="text-4xl md:text-6xl font-serif text-white tracking-wide">
          MADE FOR YOU
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white font-light">
          Lorem ipsum dolor sit amet, adipiscing elit. Aenean commodo ligula.
        </p>
        <button className="mt-6 px-8 py-3 bg-transparent text-white border border-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300">
          READ MORE
        </button>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-10 flex items-center gap-4">
        <span className="text-white text-sm">2 / 3</span>
        <div className="w-0.5 h-20 bg-white"></div>
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-5 left-5 flex gap-4 text-white">
        <a href="#" className="hover:underline">
          FB
        </a>
        <a href="#" className="hover:underline">
          IN
        </a>
        <a href="#" className="hover:underline">
          TW
        </a>
      </div>
    </div>
  );
};

export default Home;
