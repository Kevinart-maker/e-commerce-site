'use client'

import { pirulen } from "@/ui/fonts";
import { IoSend } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className='bg-black p-[2rem] text-white flex md:flex-row gap-6 justify-between flex-col'>
            <div className='flex flex-col gap-4'>
                <h1 className={`${pirulen.className} sm:block hidden text-[1.4rem] font-bold`}>Nivek Techs</h1>

                <div className='flex flex-col gap-2'>
                    <span>Subscribe</span>
                    <div className='flex gap-2 border border-white rounded p-2 items-center'>
                        <input type='text' placeholder='Enter email'
                        className='text-sm outline-none bg-transparent w-full'/>
                        <IoSend />
                    </div>
                </div>
            </div>

            <div className='flex flex-col'>
                <h3 className='font-medium '>Support</h3>
                <ul className='text-sm flex flex-col gap-2'>
                    <li>111 doe street, Lagos, Nigeria.</li>
                    <li>doe@gmail.com</li>
                    <li>+234 813 960 1733</li>
                </ul>
            </div>
        </footer>
    );
}