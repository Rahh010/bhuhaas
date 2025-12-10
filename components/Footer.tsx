// components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
    <footer className="w-full bg-[#121212] border-t border-gray-800 flex flex-col justify-center items-center text-gray-500 text-sm py-4 mt-10 text-[12px]">
        <div className="w-full flex justify-around mb-4">
            <div className="flex flex-col text-left gap-2">
                <p className="text-white">Useful Links</p>
                <Link href="/about" className="hover:underline mx-2">About</Link>
                <Link href="/contact" className="hover:underline mx-2">Contact</Link>
                <Link href="/services" className="hover:underline mx-2">services</Link>
            </div>
            <div className="flex flex-col text-left gap-2">
                <p className="text-white">Follow Us</p>
                <Link href="https://www.instagram.com/bhuhaas_?utm_source=qr&igsh=MWtpOGUxdW50cmt1dg==" target="_blank" rel="noopener noreferrer"  className="hover:underline mx-2">bhuhaas_</Link>
                <p className="text-white">Mail Us</p>
                <Link href="mailto:bhuhaas@gmail.com" className="hover:underline mx-2">bhuhaas@gmail.com</Link>
            </div>
        </div>
        <div className="text-[10px] m-0 p-0">
            <p>Developed and Designed by Rahul | Aruthra</p>
        </div>
        <br />
        <p>© {year} Bhuhaas. All rights reserved.</p>
    </footer>
  );
}