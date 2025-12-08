// components/Card.tsx
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

interface CardProps {
  imageSrc: string;
  altText: string;
  heading: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, altText, heading, text }) => {
  useEffect(() => {
  AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="w-[80vw] max-w-xl rounded-xl overflow-hidden bg-[#1C1C1C] shadow-[0_0_12px_#A020F0] mt-10 mx-auto" data-aos="fade-up">
      {/* Image with bottom fade */}
      <div className="relative h-48 w-full">
        <Image src={imageSrc} alt={altText} fill className="object-cover" />
        <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-[#1C1C1C] to-transparent"></div>
        <h2 className="absolute bottom-2 left-4 text-white text-xl font-bold">{heading}</h2>
      </div>

      {/* Secondary text below image */}
      <div className="p-4">
        <p className="text-gray-300 text-[.9em] whitespace-pre-line pt-1 pb-5">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
