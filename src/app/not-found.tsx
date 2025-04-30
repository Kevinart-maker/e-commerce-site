import React from "react";
import PageLink from '@/components/PageLink'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="">
        <PageLink link={'404 Error'} />
      <div className="flex items-center justify-center flex-col gap-7 h-[70vh]">
        <h1 className="text-7xl font-bold">404, NOT FOUND</h1>
        <p className="font-semibold">
          Your visited page not found. You may return to home page
        </p>
        {/* <div className="red-btn">Back to home page</div> */}
        <Link href='/' className='red-btn'>Back to home page</Link>
      </div>
    </div>
  );
};

export default NotFound;
