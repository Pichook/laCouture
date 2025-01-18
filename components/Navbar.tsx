'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row items-center px-10 py-3">
        <div className="flex flex-row items-center flex-1 gap-6">
          <Link href="/Gallery" className="Link">Gallery</Link>
          <Link href="/About" className="Link">About Us</Link>
          <Link href="/Review" className="Link">Customer Reviews</Link>
        </div>
        <div className="flex flex-col items-center flex-1">
          <Image src="/logo.jpg" alt="logo" width={50} height={50} />
          <p className="text-md font-normal text-[#A19595]">LA COUTURE</p>
        </div>
        <div className="flex flex-row items-center flex-1 justify-end">
          <Button variant="outline" className="w-52 hover:bg-black hover:text-white" onClick={() => router.push('/Contact')}>Book an Appointment</Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <Image src="/logo.jpg" alt="logo" width={40} height={40} />
            <p className="text-sm font-normal text-[#A19595] ml-2">LA COUTURE</p>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link href="/Gallery" className="block py-2 hover:text-gray-600">Gallery</Link>
            <Link href="/About" className="block py-2 hover:text-gray-600">About Us</Link>
            <Link href="/Contact" className="block py-2 hover:text-gray-600">Contact</Link>
            <Link href="/Review" className="block py-2 hover:text-gray-600">Testimonials</Link>
            <Button variant="outline" className="w-full hover:bg-black hover:text-white">
              Book an Appointment
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
