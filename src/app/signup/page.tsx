import Image from 'next/image'
import hero from './heroimg.png'

export default function signup(){

    return(
        <section className='mt-[2rem] w-full flex md:flex-row flex-col gap-8 items-center'>
            <Image src={hero} alt='signup_hero_img' className='w-[35rem]'/>

            <div className='flex flex-col gap-8 h-full px-[3rem] bg-green'>
                <h1 className='font-semibold text-3xl'>Create an account</h1>
                <span className='text-xs'>Enter your details below</span>

                <div className='flex flex-col gap-4 text-xs'>
                    <input type="text" placeholder='Name' className='outline-none border-b bg-transparent w-full border-bottom p-[0.4rem]'/>
                    <input type="text" placeholder='Email' className='outline-none border-b bg-transparent w-full border-bottom p-[0.4rem]'/>
                    <input type="password" placeholder='Password' className='outline-none border-b bg-transparent w-full border-bottom p-[0.4rem]'/>

                    <button className='rounded py-[0.5rem] w-full bg-[#9afc49] text-white'>Create Account</button>
                    <button className='flex gap-2 items-center justify-center border border-gray-400 rounded py-[0.5rem] w-full'>
                        <img src='/google-icn.png' className='w-[1rem]'/>
                        <span>Sign up with Google</span>
                    </button>
                </div>

                <div className='text-center text-xs'> Already have account? <span className='underline'>Log in</span></div>
            </div>
        </section>
    )
}