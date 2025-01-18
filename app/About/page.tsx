import AboutCarousel from '@/components/AboutCarousel'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import Image from 'next/image'

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <AboutCarousel />
      <div className='flex flex-col items-center justify-center my-20'>
        <div className='grid grid-cols-2 h-full'>
          <Image src={'/couple3.png'} alt={'couple'} width={500} height={500} className=''/>
          <div className='items-center justify-center text-center mt-28 h-full'>
              <p className='text-xl font-bold'>Mission</p>
              <p className='text-md font-light'>La Couture aims to create the picture perfect wedding of your dream <br />
                Through <span className='text-[#ff8742] font-bold'>Seamless Consultation and Detailed Planning</span> <br />
                To ensure that your <span className='text-[#ff8742] font-bold'>Wedding</span> is just as Special as you hoped for
              </p>


          </div>
          
        </div>
        <div className='grid grid-cols-2 h-full'>
          <div className='items-center justify-center text-center mt-28 h-full'>
              <p className='text-xl font-bold'>Vision</p>
              <p className='text-md font-light'>La Couture aims to create the picture perfect wedding of your dream <br />
                Through <span className='text-[#ff8742] font-bold'>Seamless Consultation and Detailed Planning</span> <br />
                To ensure that your <span className='text-[#ff8742] font-bold'>Wedding</span> is just as Special as you hoped for
              </p>


          </div>
          <Image src={'/couple3.png'} alt={'couple'} width={500} height={500} className='flex flex-1'/>

        </div>

      </div>
      <div className='flex flex-col items-center justify-center mb-20'>
        <p className='text-4xl font-bold'>HIGHLIGHTS</p>
        <div className = "flex flex-row gap-4 mt-10 mx-4">
        <Image src={'/couple3.png'} alt={'couple'} width={400} height={500} className='flex flex-1'/>
        <Image src={'/couple3.png'} alt={'couple'} width={400} height={500} className='flex flex-1'/>

          <Image src={'/couple3.png'} alt={'couple'} width={400} height={500} className='flex flex-1'/>
          </div>

      </div>
    </div>
  )
}
