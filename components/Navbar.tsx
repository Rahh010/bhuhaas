"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => !open && setOpen(true)}
        className={`fixed z-9999 bg-[#7524A2] border border-[#9A6AE8]
        cursor-pointer transition-all duration-500 overflow-hidden flex items-center justify-center shadow-[0_0_10px_#9A6AE8] h-[60px] w-[60px] m-0 text-white
        ${
            open
            ? "w-screen h-fit top-0 right-0 rounded-lg p-4"
            : "w-10 h-10 rounded-[50%] top-5 right-5"
        }`}

    >
      {/* Hamburger icon (hidden when open) */}
      {!open && (
        <span className="text-[20px]">
            <FontAwesomeIcon icon={faBars} />
        </span>
      )}

      {/* Menu links (hidden when closed) */}
      {open && (
        <div className="flex flex-col gap-2 justify-center items-center opacity-100 transition-opacity duration-500 w-full">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            className="absolute top-5 right-5"
          >
            <span className="text-[20px]">
                <FontAwesomeIcon icon={faX} />
            </span>
          </button>

          <Link href="/" className="hover:text-gray-300 text-[20px] p-2 w-[80%]">Home</Link>
          <Link href="/about" className="hover:text-gray-300 text-[20px] p-2 w-[80%]">About</Link>
          <Link href="/contact" className="hover:text-gray-300 text-[20px] p-2 w-[80%]">Contact</Link>
          <Link href="/services" className="hover:text-gray-300 text-[20px] p-2 w-[80%]">Services</Link>

        </div>
      )}
    </div>
  );
}
