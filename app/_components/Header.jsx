import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from 'next/link';

function Header() {
  return (
    <div>
    <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm'>
        <div className='flex items-center space-x-3'> 
            <Image src="/logo.png" alt="logo" width={130} height={30} />
        </div>
        <Link
        href="/"
         className="bg-primary cursor-pointer text-white py-2 px-4 rounded hover:bg-gray-600"
         >
          Get Started
        </Link>
    </div>
</div>
  )
}

export default Header
