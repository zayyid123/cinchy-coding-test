import React, { useState } from 'react'
import Devider from './Devider'

// image
import ArrowIcon from '../assets/image/arrow.svg'
import Image from 'next/image'

const CardFAQ = ({ data }) => {
  const [isOpen, setisOpen] = useState(false)
  return (
    <div 
      className='bg-white p-6 rounded-[20px] border border-[#E5E3E8] text-[#04332D] mb-4 mx-4'
    > 
      <div 
        className='flex justify-between items-center mb-[34px] max-w-[776px]'
      >
        {/* title faq */}
        <h1 className='outfit font-normal text-[38px]'>{data.title}</h1>

        {/* arrow Icon */}
        <div 
          className='bg-[#F2F7F5] px-[6px] py-[8px] rounded-full cursor-pointer'
          onClick={() => {
            setisOpen(!isOpen)
          }}
        >
          <Image src={ArrowIcon} alt='arrow icon' className={`transition duration-300 ease-in-out ${isOpen ? "origin-center rotate-0" : "origin-center rotate-180"}`}/>
        </div>
      </div>

      {/* short info */}
      <p className='outfit text-base font-normal mb-[34px] max-w-[776px]'>{data.shortInfo}</p>

      <div 
        className={`transition duration-300 ease-in-out flex-col mb-5 w-full ${isOpen ? 'flex' : 'hidden'}`}
      > 
        <Devider/>

        {/* longinfo */}
        <p className=' outfit text-base font-normal mt-[34px] max-w-[776px]'>{data.longInfo}</p>
      </div>
    </div>
  )
}

export default CardFAQ