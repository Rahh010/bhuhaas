// components/TestimonialCard.tsx
"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface TestimonialCardProps {
  rating: number; // 0 to 5
  review: string;
  user: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ rating, review, user }) => {
  return (
    <div className="w-[80vw] max-w-md h-[150px] bg-[#1C1C1C] shadow-[0_0_12px_#A020F0] rounded-xl p-4 flex flex-col justify-between mx-auto mt-6">
      {/* Rating */}
      <div className="text-yellow-400">
        {[...Array(rating)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-300 text-sm">{review}</p>

      {/* User name */}
      <p className="text-gray-500 text-xs">~ {user}</p>
    </div>
  );
};

export default TestimonialCard;
