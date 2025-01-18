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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoFilter } from "react-icons/io5";

export default function page() {
  return (
    <div className='flex flex-col items-center justify-between min-h-screen'>
      <div className='w-full flex justify-end px-4 mb-10'>
        <div className='hover:bg-black w-24 h-10 rounded-md hover:text-white'>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full h-full flex items-center justify-center">
              Filter <span className="ml-2"><IoFilter /></span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4'>
        {Array.from({length: 10}).map((_, index) => (
          <div key={index} className='relative group aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <Image 
              src="/couple2.png" 
              alt="Wedding gown style" 
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">A&B's Story</h3>
                <p className="text-gray-700">"The most magical day of our lives!"</p>
              </div>
            </div>
          </div>
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
