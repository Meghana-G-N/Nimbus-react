import React, { useState } from 'react';
const Gallery = () => {
  const[CurrentImage,setCurrentImage]=useState("https://www.jimdo.com/blog/wp-content/uploads/2019/04/Header-Wedding-1024x512.jpg");
  const images = [
    "https://www.jimdo.com/blog/wp-content/uploads/2019/04/Header-Wedding-1024x512.jpg",
    "https://www.jimdo.com/blog/wp-content/uploads/2019/04/Header-Wedding-1024x512.jpg",
    "https://www.jimdo.com/blog/wp-content/uploads/2019/04/Header-Wedding-1024x512.jpg",
    "https://www.jimdo.com/blog/wp-content/uploads/2019/04/Header-Wedding-1024x512.jpg",
    "https://www.jimdo.com/blog/wp-content/uploads/2019/04/Header-Wedding-1024x512.jpg",
  ];
  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length); 
    setCurrentImage(images[randomIndex]);
  };
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index + 1}`} className="rounded-lg shadow-lg" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;