'use client'

import { CiMobile3, CiCamera } from "react-icons/ci";
import { GrGamepad } from "react-icons/gr"; 
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { PiHeadphones } from "react-icons/pi";
import { IconType } from "react-icons";

interface BrowseIcons {
    title: string;
    icon: IconType;
}

const Iconsdata: BrowseIcons[] = [
    {
        title: 'Phones',
        icon: CiMobile3
    },
    {
        title: 'Computers',
        icon: RiComputerLine
    },
    {
        title: 'SmartWatch',
        icon: BsSmartwatch
    },
    {
        title: 'Camera',
        icon: CiCamera
    },
    {
        title: 'HeadPhones',
        icon: PiHeadphones
    },
    {
        title: 'Gaming',
        icon: GrGamepad
    },
]

const mapIcons = Iconsdata.map((item, index) => (
    <div key={index} className="flex flex-col items-center gap-2 border rounded p-4 w-[7rem] hover:border-none hover:bg-[#9afc49] hover:text-white cursor-pointer">
        <item.icon size={24} />
        <p className="text-sm">{item.title}</p>
    </div>
))

const BrowseCategory = () => {
    return ( 
        <section className=" p-4 category col-container">
            <div className="round-line-container">
                <div className="round-line"></div>
                <div className="round-line-text">Categories</div>
            </div>
            <h1 className="font-bold text-[1.5rem]">Browse By Category</h1>

            <div className='flex gap-[2rem] justify-center'>
                {mapIcons}
            </div>
        </section>
     );
}
 
export default BrowseCategory;