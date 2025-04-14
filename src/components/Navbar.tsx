'use client'

import Image from "next/image"
import Link from "next/link"
import { pirulen } from "@/ui/fonts";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-4 px-8 p-4 mt-[2rem] border-b">
        <div className='absolute top-0 right-0 left-0 bg-black text-white text-sm p-1 flex justify-center'>Quality tech from Nivek</div>
        <div className="flex items-center gap-2">
            {/* <Image 
                src='/KK.png'
                alt='kulturekaps_logo'e
                width={60}
                height={50}
            />  */}
            <h1 className={`${pirulen.className} sm:block hidden text-[1.4rem] font-bold`}>Nivek Techs</h1>
        </div>

        <ul className="flex gap-4">
            <Link className="hover:underline" href=''>Shop</Link>
            <Link className="hover:underline" href=''>Contact</Link>
        </ul>     
    </nav>
  )
}
