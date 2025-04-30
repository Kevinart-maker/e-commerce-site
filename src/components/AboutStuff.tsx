// import { TbTruckDelivery } from "react-icons/tb";
// import { RiCustomerService2Fill } from "react-icons/ri";
// import { GoShieldCheck } from "react-icons/go";
// import { IconType } from "react-icons";
// import { StaticImageData } from "next/image";
// import shop from '../app/about/icon_shop.png'
// import bag from '../app/about/Icon-Moneybag.png'
// import thing from '../app/about/this.png'
// import Image from 'next/image'


// interface Option {
//     img: IconType | StaticImageData;
//     title: string;
//     content: string;
// }

// const options: Option[] = [
//     {
//         img: shop,
//         title: '10.5k',
//         content: 'Sallers active our site',
//     },
//     {
//         img: RiCustomerService2Fill,
//         title: '33k',
//         content: 'Mopnthly Produduct Sale',
//     },
//     {
//         img: thing,
//         title: '45.5k',
//         content: 'Customer active in our site',
//     },
//     {
//         img: bag,
//         title: '25k',
//         content: 'Anual gross sale in our site',
//     },
// ]

// const AboutStuff = () => {
//     return ( 
//         <div className='my-3 py-[5rem] flex gap-[3rem] justify-center'>
//             {
//                 options.map((item, index)=>(
//                     <div key={index} className='flex flex-col gap-4 items-center text-xs border py-10 px-12 cursor-pointer hover:bg-[#DB4444] hover:text-white'>
//                         <div className="bg-gray-500 rounded-full p-2">
//                         <item.img size={50} className='rounded-[50%] bg-black text-white p-[0.3rem]'/>
//                         <Image src={item.img} alt="icon" />
//                         </div>
//                         <div className="text-center">
//                         <h3 className='text-lg font-bold mb-1'>{item.title}</h3>
//                         <span>{item.content}</span>
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>
//      );
// }
 
// export default AboutStuff;

import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";
import shop from '../app/about/icon_shop.png';
import bag from '../app/about/Icon-Moneybag.png';
import thing from '../app/about/this.png';
import Image from 'next/image';

interface IconOption {
    imgType: 'icon';
    img: IconType;
    title: string;
    content: string;
}

interface ImageOption {
    imgType: 'image';
    img: StaticImageData;
    title: string;
    content: string;
}

type Option = IconOption | ImageOption;

const options: Option[] = [
    {
        imgType: 'image',
        img: shop,
        title: '10.5k',
        content: 'Sallers active our site',
    },
    {
        imgType: 'icon',
        img: RiCustomerService2Fill,
        title: '33k',
        content: 'Monthly Product Sale',
    },
    {
        imgType: 'image',
        img: thing,
        title: '45.5k',
        content: 'Customer active in our site',
    },
    {
        imgType: 'image',
        img: bag,
        title: '25k',
        content: 'Annual gross sale in our site',
    },
];

const AboutStuff = () => {
    return (
        <div className='my-3 py-[5rem] flex gap-[3rem] justify-center flex-wrap'>
            {options.map((item, index) => (
                <div
                    key={index}
                    className='flex flex-col gap-4 items-center text-xs border py-10 px-12 cursor-pointer hover:bg-[#DB4444] hover:text-white'
                >
                    <div className="bg-gray-500 rounded-full p-2">
                        {item.imgType === 'icon' ? (
                            <item.img size={50} className='bg-black text-white p-[0.3rem] rounded-full' />
                        ) : (
                            <Image src={item.img} alt="icon" width={50} height={50} className='rounded-full bg-black text-white p-[0.3rem]' />
                        )}
                    </div>
                    <div className="text-center">
                        <h3 className='text-lg font-bold mb-1'>{item.title}</h3>
                        <span>{item.content}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutStuff;
