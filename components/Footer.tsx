// components/Footer.tsx
"use client";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
    <footer className="w-full bg-[#121212] border-t border-gray-800 flex flex-col justify-center items-center text-gray-500 text-sm py-4 mt-10 text-[12px]">
        <div>
            Developed and Designed by Rahul | Aruthra
        </div>
        <br />
        <p>© {year} Bhuhaas. All rights reserved.</p>
    </footer>
  );
}