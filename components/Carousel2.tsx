import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

export default function Carousel2() {
  return (
    <div className='relative min-h-screen'>      
        <Image src="/bg2-home.jpg" alt="home" width={1000} height={1000} className="w-full h-full object-contain absolute" />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-3xl space-y-6 flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-light text-white text-center bg-black/30 p-4 rounded-lg">"La Couture Always Brings
            You the Next Level Wedding."</h1>
            <div className='flex items-center justify-center gap-4'>
                <Button variant="outline" className="hover:bg-primary hover:text-white hover:border-primary w-60">
                    Book an Appointment
                </Button>
            </div>
            
        </div>
        </div>
    </div>
  )
}
