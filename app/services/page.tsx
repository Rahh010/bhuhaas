import { cardsData } from "@/utils/cardsData";
import Card from "@/components/Card";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
    return (
        <>
            <div className="w-screen justify-center items-center flex flex-col p-5 pt-[100px]">
                <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#A020F0] after:rounded after:blur-sm after:shadow-[0_0_8px_#A020F0] text-[32px] w-[80vw] text-left">
                    Our Services
                </span>
                <p className="mt-4">Explore our range of services designed to elevate your brand and drive growth.</p>
                {/* Additional content about services can be added here */}
                <div>
                    {cardsData.map((card, index) => (
                        <Card
                        key={index}
                        imageSrc={card.imageSrc}
                        altText={card.altText}
                        heading={card.heading}
                        text={card.text}
                        />
                    ))}
                </div>
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