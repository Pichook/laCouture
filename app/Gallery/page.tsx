import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const categories = ['Cambodian', 'Seasonal', 'Western']

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center mb-10'>
        <p className='text-4xl font-light'>GOWNS</p>
        <p className='text-xl font-light pt-8'>From Seasons To Tradition, There are Wedding Gowns Of All Types for You To Choose From </p>
      </div>

      <div className='flex flex-row items-center justify-center mt-10 border-y-[1px] border-gray-400 w-full h-[70px] space-x-10'>
        {categories.map((category) => (
          <Button key={category} variant="ghost" className='CategoryButton'>{category}</Button>
        ))}
      </div>
      <div className='grid grid-cols-3 items-center justify-center mt-20 gap-10'>
        {Array.from({length: 9}).map((_, index) => (
          <Image key={index} src='/couple2.png' alt='Gown' width={300} height={300} />
        ))}
      </div>
      <div className='my-20'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>



    </div>
  )
}
