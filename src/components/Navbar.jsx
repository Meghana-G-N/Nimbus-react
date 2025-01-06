import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-5 right-5 flex flex-row gap-12 text-white font-medium">
      <a href="#" className="hover:underline whitespace-nowrap "> 
        Home
      </a>
      <a href="#" className="hover:underline whitespace-nowrap">
        Pages
      </a>
      <a href="#" className="hover:underline whitespace-nowrap">
        Portfolio
      </a>
      <a href="#" className="hover:underline whitespace-nowrap">
        Proofing Gallery
      </a>
      <a href="#" className="hover:underline whitespace-nowrap">
        Blog
      </a>
      <a href="#" className="hover:underline whitespace-nowrap">
        Shop
      </a>
      <a href="#" className="hover:underline whitespace-nowrap">
        Cart (0)
      </a>
      <a href="#" className="hover:underline whitespace-nowrap">
        Info
      </a>
    </div>
  );
};

export default Navbar;