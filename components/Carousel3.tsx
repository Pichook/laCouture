import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

export default function Carousel3() {
  return (
    <div className='relative min-h-screen'>      
    <Image src="/bg3-home.jpg" alt="home" width={1000} height={1000} className="w-full h-full object-contain absolute" />
    <div className="relative z-10 flex items-center justify-center min-h-screen w-full">
      <div className="space-y-6 flex flex-col items-center justify-center p-8 text-center bg-white/50 rounded-lg w-full">
        <h1 className="text-4xl font-bold text-black  p-4 ">La Couture</h1>
        <div className='flex items-center justify-center gap-4'>
            <p>An Event / Wedding Consultant & Design & Decoration <br />
            Tailored to make your Wedding A Dream </p>
        </div>
        
      </div>
    </div>
</div>
  )
}
