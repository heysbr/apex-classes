"use client";
import { useState } from "react";

const images = [
  "./images/carousel/carousel.jpg",
  "./images/carousel/carousel.jpg",
  "./images/carousel/carousel.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" relative w-full mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Carousel Images */}
      <div
        className="flex transition-transform duration-500 "
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        onClick={handlePrev}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        onClick={handleNext}
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
