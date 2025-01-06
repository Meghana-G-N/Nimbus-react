import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Solene</div>
        <nav className="flex space-x-6">
          {/* <a href="#home" className="text-gray-700 hover:text-black">Home</a>
          <a href="#about" className="text-gray-700 hover:text-black">About</a>
          <a href="#services" className="text-gray-700 hover:text-black">Services</a>
          <a href="#gallery" className="text-gray-700 hover:text-black">Gallery</a>
          <a href="#contact" className="text-gray-700 hover:text-black">Contact</a> */}
        </nav>
      </div>
    </header>
  );
};
export default Header;