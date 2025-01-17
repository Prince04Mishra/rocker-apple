import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import coffeeImage1 from "../assets/Coffee.jpg";
import coffeeImage2 from "../assets/Coffee.png";
import coffeeImage3 from "../assets/Coffee.webp";
import coffeeImage4 from "../assets/Coffee1.jpg";
import coffeeImage5 from "../assets/Coffee2.webp";
import coffeeImage6 from "../assets/Coffee3.jpg";
import coffeeImage7 from "../assets/Coffee3.webp";
import coffeeImage8 from "../assets/Coffee4.jpg";
import coffeeImage9 from "../assets/Coffee4.webp";
import coffeeImage10 from "../assets/Coffee5.webp";

const Carousel = () => {
  const images = [
    coffeeImage1,
    coffeeImage2,
    coffeeImage3,
    coffeeImage4,
    coffeeImage5,
    coffeeImage6,
    coffeeImage7,
    coffeeImage8,
    coffeeImage9,
    coffeeImage10,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 7000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative ">
      <img
        src={images[currentImage]}
        alt={`carousel-${currentImage}`}
        className="w-full h-[400px] object-cover"
      />
      <motion.button
        whileHover={{ x: -4 }}
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#8592;
      </motion.button>
      <motion.button
        onClick={goToNext}
        whileHover={{ x: 4 }}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#8594;
      </motion.button>
    </div>
  );
};

export default Carousel;
