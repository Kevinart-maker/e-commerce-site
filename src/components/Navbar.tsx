"use client";

import Image from "next/image";
import Link from "next/link";
import { pirulen } from "@/ui/fonts";
// import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-4 px-8 p-4 mt-[2rem] border-b">
      <div className="absolute top-0 right-0 left-0 bg-black text-white text-sm p-1 flex justify-center">
        Quality tech from Nivek
      </div>
      <div className="flex items-center gap-2">
        {/* <Image 
                src='/KK.png'
                alt='kulturekaps_logo'e
                width={60}
                height={50}
            />  */}
        <Link href={"/"}>
          <h1
            className={`${pirulen.className} sm:block hidden text-[1.4rem] font-bold`}
          >
            Nivek-Techs
          </h1>
        </Link>
      </div>

      <ul className="flex gap-10">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/contact">
          Contact
        </Link>
        <Link className="hover:underline" href="/about">
          About
        </Link>
        <Link className="hover:underline" href="/signup">
          Signup
        </Link>
      </ul>

      {/* <div className="flex items-center bg-red-500 w-[15rem] relative">
        <input type="text" className="bg-gray-500 w-full p-2 text-white rounded-md" placeholder="search..."   />
        <div className="w-5 h-5 bg-black absolute right-[2%] rounded-full">

        </div>
      </div> */}

      <div className="flex items-center gap-4">
        <Link href={"/wishlist"}>
          <FaRegHeart className="w-[1.3rem] h-[1.3rem]" />
        </Link>
        <MdOutlineShoppingCart className="w-[1.3rem] h-[1.3rem]" />
        <IoPersonOutline className="w-[1.3rem] h-[1.3rem]" />
      </div>
    </nav>
  );
}
