import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'


export default function Carousel1() {
  return (
    <div className='relative min-h-screen'>      
        <Image src="/bg3-home.jpg" alt="home" width={1000} height={1000} className="w-full h-full object-contain absolute" />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="max-w-3xl space-y-6 flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-light text-black text-center bg-white/50 p-4 rounded-lg">Spring Collection has arrived <br/> Themes, Dresses, Suits, and More</h1>
            <div className='flex items-center justify-center gap-4'>
                <Button variant="default" className="hover:bg-white hover:text-black hover:border-white w-60">
                    Check Out Our Collection
                </Button>
            </div>
            
          </div>
        </div>
    </div>
  )
}

