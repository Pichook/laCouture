import React from 'react'
import Image from 'next/image'

export default function homePage() {
  return (
    <div className="">
      <Image src="/bg-home.png" alt="home" width={1000} height={1000} className="w-full h-full" />
    </div>
  )
}
