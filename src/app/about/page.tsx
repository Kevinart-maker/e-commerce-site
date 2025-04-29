import PageLink from '@/components/PageLink'
import Option from '@/components/option'
import React from 'react'
import about_img from './about_img.png'
import Image from 'next/image'
import AboutStuff from '@/components/AboutStuff'
import Team from '@/components/Team'

const page = () => {
  return (
    <section>
      <PageLink link={'About'} />
      <div className='w-full grid grid-cols-[1fr_1fr]'>
        <div className='flex justify-center flex-col pl-8 gap-7'>
          <h1 className='text-4xl font-bold'>Our Story</h1>

          <p className='w-[73%]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>

          <p className='w-[70%]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>

        <Image src={about_img} alt='about_img' className='w-full h-inherit overflow-hidden'/>
        
      </div>
      <AboutStuff/>
      <Team />
      <Option/>
    </section>
  )
}

export default page