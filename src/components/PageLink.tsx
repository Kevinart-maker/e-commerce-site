import React from 'react'
import Link from 'next/link'

type PageLinkProps = {
  link: string;
};

const PageLink = ({link} : PageLinkProps) => {
  return (
    <div className='py-8 px-8'>
            <span className='font-bold text-xs'><span><Link className='font-normal' href="/">Home</Link></span>   <span>/</span> k  <span>{link}</span></span>
    </div>
  )
}

export default PageLink
