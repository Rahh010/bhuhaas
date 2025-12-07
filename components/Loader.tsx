"use client";

import Lottie from "lottie-react";
import animationData from "@/public/animation.json";

export default function Loader() {
  return (
    <div className="top-[50vh] w-full h-full">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
