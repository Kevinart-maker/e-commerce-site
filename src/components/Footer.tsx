'use client'

import { pirulen } from "@/ui/fonts";
import { IoSend } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className='bg-black px-[2rem] py-[5rem] text-white flex md:flex-row gap-6 justify-between flex-col'>
            <div className='flex flex-col gap-4'>
                <h1 className={`${pirulen.className} sm:block hidden text-[1.4rem] font-bold`}>Nivek Techs</h1>

                <div className='flex flex-col gap-2'>
                    <span>Subscribe</span>
                    <div className='flex gap-2 border border-white rounded p-2 items-center'>
                        <input type='text' placeholder='Enter email'
                        className='text-sm outline-none bg-transparent w-full'/>
                        {/* <IoSend /> */}
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <h3 className='font-bold'>Support</h3>
                <ul className='text-sm flex flex-col gap-3 cursor-pointer'>
                    <li className="text-xs">111 doe street, Lagos, Nigeria.</li>
                    <li className="text-xs">doe@gmail.com</li>
                    <li className="text-xs">+234 813 960 1733</li>
                </ul>
            </div>

            <div className='flex flex-col gap-4'>
                <h3 className='font-bold '>Account</h3>
                <ul className='text-sm flex flex-col gap-3'>
                    <li className="text-xs">My Account</li>
                    <li className="text-xs">Login/Register</li>
                    <li className="text-xs">Cart</li>
                    <li className="text-xs">WishList</li>
                    <li className="text-xs">Shop</li>
                </ul>
            </div>

            <div className='flex flex-col gap-4'>
                <h3 className='font-bold '>Quick Link</h3>
                <ul className='text-sm flex flex-col gap-3'>
                    <li className="text-xs">Privacy Policy</li>
                    <li className="text-xs">Terms of Use</li>
                    <li className="text-xs">FAQ</li>
                    <li className="text-xs">Contact</li>
                </ul>
            </div>

            <div className='flex flex-col gap-4'>
                <h3 className='font-bold'>Download App</h3>
                <ul className='text-sm flex flex-col gap-3'>
                    <li className="text-xs">111 doe street, Lagos, Nigeria.</li>
                    <li className="text-xs">doe@gmail.com</li>
                    <li className="text-xs">+234 813 960 1733</li>
                </ul>
            </div>
        </footer>
    );
}