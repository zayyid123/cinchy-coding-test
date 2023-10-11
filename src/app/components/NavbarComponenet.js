"use client"
import Image from 'next/image'
import React, { useState } from 'react'

// image
import Logo from '../assets/image/logo.png'

const NavbarComponenet = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* logo */}
        <a href="https://flowbite.com/" className="flex items-center">
          <Image src={Logo} className="w-[278px] mr-3 max-[355px]:w-[220px]" alt="Flowbite Logo" />
        </a>

        {/* icon hamburger menu */}
        <div 
          className="flex md:hidden"
          onClick={() => {
            setisOpen(!isOpen)
          }}
        >
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 my-4 w-[33px] justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        {/* menu */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${!isOpen && 'hidden'} nunito-sans font-normal`} id="navbar-sticky">
          <div className="flex flex-col p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-slate-200 md:flex-row md:mt-0 md:border-0 md:bg-white">
            
            {/* about us */}
            <div className='cursor-pointer hover:bg-[#E5EAE9] mx-1 mt-2 md:mt-0 p-4'>
              <p>About Us</p>
            </div>

            {/* pricing */}
            <div className='cursor-pointer hover:bg-[#E5EAE9] mx-1 p-4'>
              <p>Pricing</p>
            </div>

            {/* FAQ */}
            <div className='cursor-pointer hover:bg-[#E5EAE9] mx-1 p-4'>
              <p>FAQ</p>
            </div>

            {/* My Booking */}
            <div className='cursor-pointer hover:bg-[#E5EAE9] ml-1 mr-2 p-4'>
              <p>My Booking</p>
            </div>

            {/* Login */}
            <div className='cursor-pointer hover:bg-[#E5EAE9] flex justify-center items-center px-4 my-2 rounded-[4px] border mx-3 md:mx-0 py-3 md:py-0 border-[#00332C] bg-white md:bg-none'>
              <p>Login</p>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default NavbarComponenet