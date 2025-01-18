"use client"

import React from 'react'
import Carousel1 from '@/components/Carousel1'
import { CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Carousel } from '@/components/ui/carousel'
import Carousel2 from '@/components/Carousel2'
import Autoplay from "embla-carousel-autoplay"

export default function MainCarousel() {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
      className="w-full max-w-full aspect-[16/9] relative"
    >
      <CarouselContent>
        <CarouselItem className="flex items-center justify-center">
          <div className="w-full h-full">
            <Carousel1 />
          </div>
        </CarouselItem>
        <CarouselItem className="flex items-center justify-center">
          <div className="w-full h-full">
            <Carousel2 />
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious className="absolute" />
      <CarouselNext className="absolute" /> */}
    </Carousel>   
  </div>
  )
}
