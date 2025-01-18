"use client"

import React from 'react'
import MainCarousel from '@/components/MainCarousel'
import Image from 'next/image'
import { RiAccountBoxFill } from 'react-icons/ri'
import { Input } from 'postcss'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaStar } from 'react-icons/fa'

export default function homePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <MainCarousel />


      <div className = "flex flex-col gap-4 mt-10 mx-4">
        <div className = "flex flex-row mt-20">
          <div className="relative group w-1/2 mr-4">
            <Image src="/couple1.png" alt="home" width={500} height={900} className="w-full h-full transition-transform duration-300 group-hover:opacity-40 group-hover:scale-105" />
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black text-2xl font-bold">
              WESTERN STYLE
            </div>
          </div>
          <div className="relative group w-1/2 ml-4">
            <Image src="/couple2.png" alt="home" width={500} height={900} className="w-full h-full transition-transform duration-300 group-hover:opacity-40 group-hover:scale-105" />
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black text-2xl font-bold">
              TRADITIONAL CAMBODIAN STYLE
            </div>
          </div>
        </div>
        <div className="relative group mt-4">
          <Image src="/stage.png" alt="home" width={1090} height={1000} className="w-full h-full transition-transform duration-300 group-hover:opacity-40 group-hover:scale-105" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black text-2xl font-bold">
            EXTRAVAGANT WEDDING DECOR
          </div>
        </div>
      </div>


      
      <div className='flex flex-col items-center justify-center my-40'>
        <p className='text-4xl font-bold'>CUSTOMER REVIEWS</p>
        <div className = "flex flex-row gap-12 mt-10 mx-4">
          <Card className="w-[350px] h-[200px]">
            <CardHeader>
              <div className='flex justify-between'>
                <CardTitle>Customer Name</CardTitle>
                <div className='flex flex-row gap-2'>
                  {Array.from({length: 5}).map((_, index) => (
                    <FaStar key={index} style={{color: '#FFD700'}}/>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-md font-light'>Customer Review</p>
            </CardContent>
          </Card>

          <Card className="w-[350px] h-[200px]">
            <CardHeader>
              <div className='flex justify-between'>
                <CardTitle>Customer Name</CardTitle>
                <div className='flex flex-row gap-2'>
                  {Array.from({length: 5}).map((_, index) => (
                    <FaStar key={index} style={{color: '#FFD700'}}/>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-md font-light'>Customer Review</p>
            </CardContent>
          </Card>

          <Card className="w-[350px] h-[200px]">
            <CardHeader>
              <div className='flex justify-between'>
                <CardTitle>Customer Name</CardTitle>
                <div className='flex flex-row gap-2'>
                  {Array.from({length: 5}).map((_, index) => (
                    <FaStar key={index} style={{color: '#FFD700'}}/>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-md font-light'>Customer Review</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>

  )
}
