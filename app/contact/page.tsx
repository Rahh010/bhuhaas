'use client';
import React from 'react';
import { useState } from 'react';
import { Josefin_Sans } from 'next/font/google';

export const josefin = Josefin_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
});

export default function ContactPage() {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [mobile, setMobile] = useState("");
        const [message, setMessage] = useState("");

        const servicesList = [
            "Professional video production & editing",
            "Social media management",
            "Website creation",
            "Content writing",
            "SEO & ranking optimization",
            "Marketing automation systems",
            "SMM (Social media management)",
        ];

        const [services, setServices] = useState<string[]>([]);

        const handleCheckbox = (service: string) => {
            setServices((prev) =>
            prev.includes(service)
                ? prev.filter((item) => item !== service)
                : [...prev, service]
            );
        };

        const handleSubmit = (e: any) => {
            e.preventDefault();

            console.log({
            name,
            email,
            mobile,
            services,
            message,
            });

            // Reset form fields
            setName("");
            setEmail("");
            setMobile("");
            setServices([]);
            setMessage("");
        };
    return (
        <div className='justify-center items-center flex flex-col p-5 pt-[100px]'>
            <span className={`relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#A020F0] after:rounded after:blur-sm after:shadow-[0_0_8px_#A020F0] text-[32px] w-[80vw] text-left ${josefin.className}`}>
            Contact Us
            </span>
            <p className='mt-4'>Feel free to reach out to us, and we will call or contact you shortly</p>
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col w-full max-w-md">
            <label className="mb-2 text-sm">Name</label>
            <input
                type="text"
                className="p-2 mb-4 rounded bg-[#1C1C1C] border border-gray-700 text-white"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label className="mb-2 text-sm">Email</label>
            <input
                type="email"
                className="p-2 mb-4 rounded bg-[#1C1C1C] border border-gray-700 text-white"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label className="mb-2 text-sm">Mobile Number</label>
            <input
                type="tel"
                className="p-2 mb-4 rounded bg-[#1C1C1C] border border-gray-700 text-white"
                placeholder="Your Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
            />

            <label className="mb-2 text-sm">Services Interested In</label>
            <div className="flex flex-col gap-3 mb-4 bg-[#1C1C1C] p-4 rounded-xl text-[14px]">
                {servicesList.map((service) => (
                <label key={service} className="flex items-center gap-2 text-white">
                    <input
                    type="checkbox"
                    className="w-4 h-4 accent-[#A020F0]"
                    checked={services.includes(service)}
                    onChange={() => handleCheckbox(service)}
                    />
                    {service}
                </label>
                ))}
            </div>

            <label className="mb-2 text-sm">Message</label>
            <textarea
                className="p-2 mb-4 rounded bg-[#1C1C1C] border border-gray-700 text-white"
                placeholder="Your Message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
                type="submit"
                className="bg-[#A020F0] text-white p-2 rounded hover:bg-[#7524A2] transition-colors"
            >
                Send Message
            </button>
            </form>
        </div>
    );
}