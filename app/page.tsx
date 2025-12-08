'use client';
import Loader from "@/components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faListCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialsData } from "@/utils/testimonialsData";
import { Raleway, Josefin_Sans } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});




export default function Home() {
    useEffect(() => {
    AOS.init({ duration: 800, once: true }); // duration in ms, once: animation only once
  }, []);

  return (
    <>
      <div className="relative justify-center items-center flex flex-col">
        <h1 className={`text-[26px] w-[80vw] mt-[200px] text-center font-bold ${raleway.className}`}
        data-aos="fade-up"
        >Grow Your Brand. Expand Your Reach. Dominate Your Market.</h1>
        <Link
          href="/services"
          className="border-2 border-[#A020F0] p-2 pl-5 pr-5 rounded-lg mt-4 mb-1 bg-[#7524A2] cursor-pointer text-white shadow-[0_0_5px_#A020F0]"
        >
          Our Services <FontAwesomeIcon icon={faListCheck} />
        </Link>

        <Link
          href="/contact"
          className="border-2 border-[#A020F0] p-2 pl-5 pr-5 rounded-lg mt-2 bg-[#1C1C1C] cursor-pointer text-white shadow-[0_0_5px_#A020F0]"
        >
          Contact us <FontAwesomeIcon icon={faRightLong} />
        </Link>
        <Loader />
      </div>

      {/* who are we */}
      <div className="h-[25vh] justify-center items-center flex flex-col" data-aos="fade-up">
          <span className={`relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#A020F0] after:rounded after:blur-sm after:shadow-[0_0_8px_#A020F0] text-[28px] w-[80vw] mt-[200px] text-left ${josefin.className}`}
        
          >
            Who are we
          </span>

        <p className={`w-[80vw] mt-4 text-justify`}>At Bhuhaas, we help businesses grow into strong digital brands.
        We combine creativity, strategy, and smart marketing to reach the right audience.
        Our goal is to deliver engaging solutions that drive real results.</p>
      </div>

      {/* what we gonna do */}
      <div className="justify-start items-center flex flex-col" data-aos="fade-up">
          <span className={`relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#A020F0] after:rounded after:blur-sm after:shadow-[0_0_8px_#A020F0] text-[28px] w-[80vw] mt-[200px] text-left ${josefin.className}`}>
            What we gonna do
          </span>

        <p className="w-[80vw] mt-4 text-justify">We help brands boost their online presence through targeted marketing.
        Our team delivers creative design that engages and inspires.
        We provide smart digital solutions to drive growth and results.</p>
      </div>

      {/* our services */}
      <div className="justify-start items-center flex flex-col" data-aos="fade-up">
        <span className={`relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#A020F0] after:rounded after:blur-sm after:shadow-[0_0_8px_#A020F0] text-[28px] w-[80vw] mt-[100px] text-left ${josefin.className}`}>
          Our Services
        </span>
        <p className="w-[80vw] mt-4 text-justify">Explore our range of services designed to elevate your brand and drive growth.</p>
        <Link
          href="/services"
          className="border-2 border-[#A020F0] p-2 pl-5 pr-5 rounded-lg mt-[30px] mb-1 bg-[#7524A2] cursor-pointer text-white shadow-[0_0_5px_#A020F0]"
        >
          Our Services <FontAwesomeIcon icon={faListCheck} />
        </Link>


    </div>

      {/* Testimonials */}
      <div className="justify-start items-center flex flex-col mb-10">
        <span className={`relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#A020F0] after:rounded after:blur-sm after:shadow-[0_0_8px_#A020F0] text-[28px] w-[80vw] mt-[100px] text-left ${josefin.className}`}>
          Testimonials
        </span>
        {/* Testimonial Cards */}
        <div className="relative w-full overflow-hidden py-6">
          {/* Scrolling content */}
          <div className="flex gap-4 animate-marquee w-max">
            {testimonialsData.map((t, i) => (
              <TestimonialCard
                key={i}
                rating={t.rating}
                review={t.review}
                user={t.user}
              />
            ))}

            {/* Duplicate for perfect infinite loop */}
            {testimonialsData.map((t, i) => (
              <TestimonialCard
                key={`dupe-${i}`}
                rating={t.rating}
                review={t.review}
                user={t.user}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Get in Touch */}
      <div className="h-[30vh] justify-center items-center flex flex-col" data-aos="fade-up">
          <span className={`relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#A020F0] after:rounded after:blur-sm after:shadow-[0_0_8px_#A020F0] text-[28px] w-[80vw] mt-[100px] text-left ${josefin.className}`}>
            Get in Touch
          </span>

        <p className="w-[80vw] mt-4 text-justify">Ready to elevate your brand? Contact Bhuhaas today for a free consultation.
        </p>
        <Link
          href="/contact"
          className="border-2 border-[#A020F0] p-2 pl-5 pr-5 rounded-lg mt-2 bg-[#1C1C1C] cursor-pointer text-white shadow-[0_0_5px_#A020F0] mb-[100px]"
        >
          Contact us <FontAwesomeIcon icon={faRightLong} />
        </Link>
      </div>
    </>
  );
}
