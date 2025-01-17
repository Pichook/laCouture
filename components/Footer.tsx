"use client"

import React from 'react'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa'
import { useRouter } from 'next/navigation';

interface RouteProps {
    path: string;
}   

export default function Footer() {
     const handleClick = (path: string) => {
        const router = useRouter();
        router.push('/'+ path)
     }
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row mt-10 mb-6'>
            <div className='flex flex-col items-center flex-initial w-2/5'>
                <Image src="/logo.jpg" alt="logo" width={100} height={100} />
                <p className="text-md font-normal text-[#A19595]">LA COUTURE</p>
            </div>
            <div className='flex flex-col flex-1 space-y-2'>
                <p className='text-sm font-bold mb-2'>CONTACT US</p>
                <p className='text-sm pr-10'>La Couture PhnomPenh, Northbridge St. (1019), Phnom Penh</p>
                <p className='text-sm pr-10'>(+855) 077 861666</p>
                <FaFacebook style={{color: '#1877f2', fontSize: "2em"}}/>
            </div>
            <div className='flex flex-col flex-1 space-y-2'>
                <p className='text-sm font-bold mb-2'>HOURS</p>
                <p className='text-sm pr-10'>Monday — Saturday <br /> <span className='text-sm pr-10 text-[#A19595]'>10:00 AM — 6:00 PM</span></p>
                <p className='text-sm pr-10'>Sunday <br /> <span className='text-sm pr-10 text-[#A19595]'>10:00 AM — 3:30 PM</span></p>
            </div>
            <div className='flex flex-col flex-1 space-y-2'>
                <p className='text-sm font-bold mb-2'>MORE INFO</p>
                <p className='text-sm pr-10'>Events</p>
                <p className='text-sm pr-10'>Promotions</p>
                <p className='text-sm pr-10'>Reservation</p>
                <p className='text-sm pr-10'>Register</p>
                <p className='text-sm pr-10' onClick={() => handleClick('Contact')}>Contact Us</p>
            </div>
        </div>
        <div className='flex flex-row items-start justify-center'>
            <p className='text-[10px] text-[#A19595] w-[400px] text-center'>© 2024 All rights reserved by the Incubation Center of Kirirom Institute of Technology. This project is for practice purposes only and is not intended for real-world use.</p>
        </div>
    </div>


  )
}
