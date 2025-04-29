// import React from "react";
// import Image, { StaticImageData } from "next/image";
// import { IconType } from "react-icons";
// import { GoShieldCheck } from "react-icons/go";
// import team1 from "./team1.png";
// import team2 from './team2.png'
// import team3 from './team3.png'
// import twitter from './twitter.png'
// import insta from './instagram.png'
// import linkedin from './Icon-Linkedin.png'

// interface CardIcons {
//   icon1: StaticImageData;
//   icon2: StaticImageData;
//   icon3: StaticImageData;
// }

// interface CardItem {
//   img: StaticImageData;
//   title: string;
//   sub_title: string;
//   icons: CardIcons;
// }

// const cardItem: CardItem[] = [
//   {
//     img: team1,
//     title: "Tom Cruise",
//     sub_title: "Founder & Chairman",
//     icons: {
//       icon1: twitter,
//       icon2: insta,
//       icon3: linkedin,
//     },
//   },
//   {
//     img: team2,
//     title: "Emma Watson",
//     sub_title: "Managing Director",
//     icons: {
//       icon1: twitter,
//       icon2: insta,
//       icon3: linkedin,
//     },
//   },
//   {
//     img: team3,
//     title: "Will Smith",
//     sub_title: "Product Designer",
//     icons: {
//       icon1: twitter,
//       icon2: insta,
//       icon3: linkedin,
//     },
//   },
// ];

// const Team = () => {
//   return (
//     <section className="my-3 py-[5rem] flex gap-[3rem] justify-center">
//       {cardItem.map((item, index) => (
//         <div key={index} className="flex flex-col gap-2 rounded-xl">
//           <Image src={item.img} alt={item.sub_title} className="mb-3 object-contain" />
//           <h2 className="font-bold text-xl">{item.title}</h2>
//           <p className="text-gray-600">{item.sub_title}</p>
//           <div className="flex gap-3">
//             {/* <item.icons.icon1 />
//             <item.icons.icon2 />
//             <item.icons.icon3 /> */}
//             <Image src={item.icons.icon1} alt="twitter_image" className="w-[1rem] h-[1rem]" />
//             <Image src={item.icons.icon2} alt="insta_image" className="w-[1rem] h-[1rem]" />
//             <Image src={item.icons.icon3} alt="linkedin_image" className="w-[1rem] h-[1rem]" />
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Team;

// components/Team.tsx
import React from "react";
import team1 from "./team1.png";
import team2 from "./team2.png";
import team3 from "./team3.png";
import twitter from "./twitter.png";
import insta from "./instagram.png";
import linkedin from "./Icon-Linkedin.png";
import TeamCard from "./TeamCard";

const cardItems = [
  {
    img: team1,
    title: "Tom Cruise",
    sub_title: "Founder & Chairman",
    icons: { icon1: twitter, icon2: insta, icon3: linkedin },
  },
  {
    img: team2,
    title: "Emma Watson",
    sub_title: "Managing Director",
    icons: { icon1: twitter, icon2: insta, icon3: linkedin },
  },
  {
    img: team3,
    title: "Will Smiths",
    sub_title: "Product Designer",
    icons: { icon1: twitter, icon2: insta, icon3: linkedin },
  },
];

const Team = () => {
  return (
    <section className="my-3 py-[5rem] flex gap-[3rem] justify-center">
      {cardItems.map((item, index) => (
        <TeamCard
          key={index}
          img={item.img}
          title={item.title}
          sub_title={item.sub_title}
          icons={item.icons}
        />
      ))}
    </section>
  );
};

export default Team;

