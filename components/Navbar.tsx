import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 flex flex-row items-center px-10 py-3">
      <div className="flex flex-row items-center flex-1 gap-6">
        <Link href="/Home" className="Link">Gallery</Link>
        <Link href="/About" className="Link">About Us</Link>
        <Link href="/Contact" className="Link">Contact</Link>
        <Link href="/Gallery" className="Link">Testimonials</Link>
      </div>
      <div className="flex flex-col items-center flex-1">
        <Image src="/logo.jpg" alt="logo" width={50} height={50} />
        <p className="text-md font-normal text-[#A19595]">LA COUTURE</p>
      </div>
      <div className="flex flex-row items-center flex-1 justify-end">
        <Button variant="outline" className="w-52 hover:bg-black hover:text-white">Book an Appointment</Button>

      </div>

    </div>
  )
}
