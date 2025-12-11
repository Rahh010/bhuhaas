"use client";

import Lottie from "lottie-react";
import animationData from "@/public/animation.json";

export default function Loader() {
  return (
    <div className="absolute top-[80%] md:top-0 w-full h-full md:h-[400px] -z-9999">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
