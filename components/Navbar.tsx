"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-5 right-5 z-[9999]">

      {/* ---------- Mobile Toggle Button ---------- */}
      <div
        onClick={() => setOpen(true)}
        className={`md:hidden bg-[#7524A2] border border-[#9A6AE8]
        cursor-pointer transition-all duration-500 ease-out
        flex items-center justify-center shadow-[0_0_10px_#9A6AE8] text-white
        ${open ? "opacity-0 scale-0" : "h-[60px] w-[60px] rounded-full opacity-100 scale-100"}`}
      >
        <FontAwesomeIcon icon={faBars} className="text-[20px]" />
      </div>

      {/* ---------- Mobile Menu ---------- */}
      <div
        className={`md:hidden fixed top-0 right-0 w-screen h-screen bg-[#7524A2] 
        border border-[#9A6AE8] shadow-xl p-6 flex flex-col items-center justify-center gap-5
        transition-all duration-500 ease-out
        ${open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-[-20px] pointer-events-none"}`}
      >
        <button
          className="absolute top-5 right-5"
          onClick={() => setOpen(false)}
        >
          <FontAwesomeIcon icon={faX} className="text-[22px] text-white" />
        </button>

        <Link href="/" onClick={() => setOpen(false)} className="text-white text-[22px] transition-all duration-300 hover:opacity-70">
          Home
        </Link>
        <Link href="/services" onClick={() => setOpen(false)} className="text-white text-[22px] transition-all duration-300 hover:opacity-70">
          Services
        </Link>
        <Link href="/contact" onClick={() => setOpen(false)} className="text-white text-[22px] transition-all duration-300 hover:opacity-70">
          Contact
        </Link>
        <Link href="/about" onClick={() => setOpen(false)} className="text-white text-[22px] transition-all duration-300 hover:opacity-70">
          About
        </Link>
      </div>

      {/* ---------- Desktop Menu ---------- */}
      <div className="hidden md:h-[60px]  md:flex md:justify-center md:items-center gap-10 bg-[#7524A2] border border-[#9A6AE8] 
      shadow-lg py-3 px-6 rounded-[50px] text-white opacity-0 animate-fadeInSlow">
        <Link href="/" className="hover:text-gray-300 transition-all duration-300">Home</Link>
        <Link href="/services" className="hover:text-gray-300 transition-all duration-300">Services</Link>
        <Link href="/contact" className="hover:text-gray-300 transition-all duration-300">Contact</Link>
        <Link href="/about" className="hover:text-gray-300 transition-all duration-300">About</Link>
      </div>
    </div>
  );
}
