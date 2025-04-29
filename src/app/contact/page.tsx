import React from 'react'
import Link from "next/link"

const page = () => {
  return (
    <section className='px-8'>
        <div className='py-8'>
            <span className='font-bold text-xs'><Link className='font-normal' href="/">Home</Link>  /  Contact</span>
        </div>

        <div className='h-[50vh] w-[70%] mx-auto my-10 grid grid-cols-6 gap-5'>
            <div className='col-span-2 shadow-lg'>

            </div>

            <div className='col-span-4'>
                <form action="" className='w-full h-full p-8 bg-blue-500 flex flex-col gap-3'>
                    <div className='flex items-center justify-between gap-3'>
                        <input type="text" className='py-2 px-2 bg-gray-300 rounded-md w-full' />
                        <input type="text" className='py-2 px-2 bg-gray-300 rounded-md w-full'/>
                        <input type="text" className='py-2 px-2 bg-gray-300 rounded-md w-full'/>
                    </div>

                    <textarea name="" id=""></textarea>

                    <button>Send Message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default page