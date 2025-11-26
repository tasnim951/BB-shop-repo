"use client";

import React, { useState } from "react";

const banners = [
  {
    src: "/images/banner1.jpg",
    heading: "Discover Beauty",
    subtitle: "Explore our exclusive makeup collection",
  },
  {
    src: "/images/banner2.jpg",
    heading: "Glowing Skincare",
    subtitle: "Nourish your skin with the best products",
  },
  {
    src: "/images/banner3.jpg",
    heading: "Signature Perfumes",
    subtitle: "Find your perfect scent today",
  },
  {
    src: "/images/banner4.jpg",
    heading: "Elegant Accessories",
    subtitle: "Complete your look with style",
  },
  {
    src: "/images/banner5.jpg",
    heading: "Seasonal Offers",
    subtitle: "Don’t miss our limited-time discounts",
  },
];

export default function BannerSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider shift in percentage (each slide is 100% width)
  const translateX = -currentIndex * 100;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <section className="relative overflow-hidden max-w-full h-96 md:h-[500px]">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {banners.map(({ src, heading, subtitle }, idx) => (
          <div key={idx} className="min-w-full relative h-full">
            <img
              src={src}
              alt={heading}
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/60 via-pink-400/30 to-pink-600/80 flex flex-col justify-center items-start p-8 md:p-16 text-black  font-[YourFontName]">
              <h2 className="text-3xl md:text-5xl font-semibold mb-2">{heading}</h2>
              <p className="text-lg md:text-2xl max-w-lg">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-pink-700 hover:bg-pink-800 text-white rounded-full p-3 shadow-lg transition"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-pink-700 hover:bg-pink-800 text-white rounded-full p-3 shadow-lg transition"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </section>
  );
}
