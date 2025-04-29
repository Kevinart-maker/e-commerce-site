// import React from 'react'

// const TeamCard = () => {
//   return (
//     <div>TeamCard</div>
//   )
// }

// export default TeamCard

// components/TeamCard.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardIcons {
  icon1: StaticImageData;
  icon2: StaticImageData;
  icon3: StaticImageData;
}

interface TeamCardProps {
  img: StaticImageData;
  title: string;
  sub_title: string;
  icons: CardIcons;
}

const TeamCard: React.FC<TeamCardProps> = ({ img, title, sub_title, icons }) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl">
      <Image src={img} alt={sub_title} className="mb-3 object-contain" />
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-gray-600">{sub_title}</p>
      <div className="flex gap-3">
        <Image src={icons.icon1} alt="twitter_image" className="w-[1rem] h-[1rem]" />
        <Image src={icons.icon2} alt="insta_image" className="w-[1rem] h-[1rem]" />
        <Image src={icons.icon3} alt="linkedin_image" className="w-[1rem] h-[1rem]" />
      </div>
    </div>
  );
};

export default TeamCard;
