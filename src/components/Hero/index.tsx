"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
//import { useTranslation } from "react-i18next";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
    <section className=" pb-4 rounded-md relative w-full h-[60vh] md:h-[70vh]flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg"
          alt="Kingsland City"
          layout="fill"
          objectFit="cover"
          className="opacity-60 "
        />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-10 justify-center z-10 text-center max-w-3xl px-6"
      >
        {/* Subtitle */}
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-4 text-3xl font-medium text-white"
        >
           <strong>Kingsland City</strong> - Luxury Living Redefined
        </motion.h4>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-6 text-4xl md:text-6xl font-bold"
        >
          Discover the Future of{" "}
          <span className="relative inline-block before:absolute before:bottom-1 before:left-0 before:w-full before:h-2 before:bg-blue-400">
            Urban Living
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="hidden text-lg text-gray-100 mb-6"
        >
          Experience a seamless blend of luxury, convenience, and innovation in the heart of Kingsland City. Your dream home awaits.
        </motion.p>

      
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-wwhite font-semibold px-6 py-3 rounded-full transition-all"
          >
            Get Started
          </button>
        </motion.form>
      </motion.div>
    </section>
    </>
  );
};

export default Hero;
