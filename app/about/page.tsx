import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <>
        <div className='justify-center items-start flex flex-col p-5 pt-[100px]'>
            <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#A020F0] after:rounded after:blur-sm after:shadow-[0_0_8px_#A020F0] text-[32px] w-[80vw] text-left">
            About Us
            </span>
            <p className='mt-4'>At Bhuhaas, we are dedicated to providing top-notch digital marketing solutions that help businesses thrive in the online world. Our team of experts specializes in SEO, social media management, content creation, and more, ensuring that your brand reaches its full potential.</p>
            <p className='mt-4'>Founded in 2024, Bhuhaas has quickly established itself as a trusted partner for businesses looking to enhance their digital presence. We pride ourselves on our innovative strategies, personalized approach, and commitment to delivering measurable results for our clients.</p>
            <p className='mt-4'>Our mission is to empower businesses of all sizes to succeed in the digital landscape through effective marketing strategies and cutting-edge technology. We believe in building long-term relationships with our clients, based on trust, transparency, and mutual success.</p>
        </div>
              {/* Get in Touch */}
            <div className="h-[30vh] justify-center items-center flex flex-col">
                <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#A020F0] after:rounded after:blur-sm after:shadow-[0_0_8px_#A020F0] text-[28px] w-[80vw] mt-[100px] text-left">
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