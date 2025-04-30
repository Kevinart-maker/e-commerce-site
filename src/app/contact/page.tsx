import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import PageLink from '@/components/PageLink'
import phone from './icons-phone.png'
import mail from './icons-mail.png'

const page = () => {
  return (
    <section className='px-8'>
        {/* <div className='py-8'>
            <span className='font-bold text-xs'><Link className='font-normal' href="/">Home</Link>  /  Contact</span>
        </div> */}
        <PageLink link={'Contact'} />

        <div className='h-[50vh] w-[70%] mx-auto my-16 grid grid-cols-6 gap-5'>
            <div className='col-span-2 shadow-md p-8 flex flex-col gap-6 rounded-lg'>
                <div className='flex flex-col gap-4'>
                    <p className='flex items-center gap-4 font-bold'><Image src={phone} alt='phone_icon'/> Call To Us</p>
                    <p className='text-sm font-semibold'>We are available 24/7, 7 days a week.</p>
                    <p className='text-sm font-semibold'>Phone: +8801611112222</p>
                </div>

                <hr className='border-t-1 border-black' />

                <div className='flex flex-col gap-4'>
                    <p className='flex items-center gap-4 font-bold'><Image src={mail} alt='mail_icon'/> Write To US</p>
                    <p className='text-sm font-semibold'>Fill out our form and we will contact you within 24 hours.</p>
                    <p className='text-sm font-semibold'>Emails: customer@exclusive.com</p>
                    <p className='text-sm font-semibold'>Emails: support@exclusive.com</p>
                </div>
            </div>

            <div className='col-span-4 shadow-md rounded-lg'>
                <form action="" className='w-full h-full px-8 py-8 flex flex-col gap-5'>
                    <div className='flex items-center justify-between gap-3'>
                        <input type="text" placeholder='Your Name' className='border-none outline-none text-sm py-3 px-2 bg-[#F5F5F5] rounded-md w-full' />
                        <input type="text" placeholder='Your Email' className='border-none outline-none text-sm py-3 px-2 bg-[#F5F5F5] rounded-md w-full'/>
                        <input type="text" placeholder='Your Phone' className='border-none outline-none text-sm py-3 px-2 bg-[#F5F5F5] rounded-md w-full'/>
                    </div>

                    <textarea name="" id="" cols={30} rows={9} className='border-none outline-none bg-[#F5F5F5] resize-none px-2 py-3 text-sm' placeholder='Your Message'></textarea>

                    <div className='flex justify-end w-full'>
                    <button className='red-btn'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default page