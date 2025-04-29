import Image from 'next/image'
import hero from './heroimg.png'
import Link from "next/link"

export default function signup(){

    return(
        <section className='my-[2rem] w-full h-[80vh] grid grid-cols-[1fr_1fr]'>

            {/* <div className='bg-blue-500 h-full w-full flex items-center justify-center'>
           
            </div> */}
            {/* <Image src={hero} alt='signup_hero_img' className='h-full w-full object-contain overflow-hidden'/>

            <div className='bg-pink-500'>

            </div> */}
            <Image src={hero} alt='signup_hero_img' className='h-[inherit]'/>

            <div className='flex items-center justify-center h-full'>
            <div className='flex flex-col gap-8 px-[3rem] py-[1rem] w-[30rem]'>
                <h1 className='font-semibold text-3xl'>Create an account</h1>
                <span className='text-xs'>Enter your details below</span>

                <div className='flex flex-col gap-4 text-xs'>
                    <input type="text" placeholder='Name' className='outline-none border-b bg-transparent w-full border-bottom p-[0.4rem]'/>
                    <input type="text" placeholder='Email' className='outline-none border-b bg-transparent w-full border-bottom p-[0.4rem]'/>
                    <input type="password" placeholder='Password' className='outline-none border-b bg-transparent w-full border-bottom p-[0.4rem]'/>

                    <button className='rounded py-[0.5rem] w-full bg-[#DB4444] text-white'>Create Account</button>
                    <button className='flex gap-2 items-center justify-center border border-gray-400 rounded py-[0.5rem] w-full'>
                        <img src='/google-icn.png' className='w-[1rem]'/>
                        <span>Sign up with Google</span>
                    </button>
                </div>

                <div className='text-center text-xs'> Already have account? <Link href={"/login"}><span className='underline'>Log in</span></Link> </div>
            </div>
            </div>
        </section>
    )
}