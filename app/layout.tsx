import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import Script from "next/script";
import Footer from "@/components/Footer";
import { Delius } from "next/font/google";


export const delius = Delius({
  subsets: ["latin"],
  weight: ["400"],
});


export const metadata: Metadata = {
  title: "Bhuhaas - Digital Marketing Agency | Grow Your Brand Online",
  description: "Bhuhaas is a full-service digital marketing agency helping businesses grow online. We specialize in SEO, social media marketing, content creation, and paid ads to expand your reach and boost conversions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={delius.className}>
        <Script
          src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js"
          type="module"
          strategy="beforeInteractive"
        />
        <div className="relative">
          <Navbar />
          <Logo />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
