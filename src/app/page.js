'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

// image
import BgImage from './assets/image/bg.png'
import Avatar from './assets/image/avatar.png'
import { GetAllDataFaq } from './services/faqServices'

export default function Home() {
  const [allDataFAQ, setallDataFAQ] = useState()

  useEffect(() => {
    const getAllDataFaqFromServices = async() => {
      const response = await GetAllDataFaq()
      setallDataFAQ(response.data)
    }

    getAllDataFaqFromServices()
  }, [])

  return (
    <main className="flex justify-start items-center flex-col">
      {/* image */}
      <div
        className='mt-[89px] relative bg-red-100'
      >
        {/* bg image */}
        <Image src={BgImage} className='object-cover h-[500px]' alt='cichy.life bg'/>
        
        <div className='flex justify-evenly items-center absolute bottom-[35%] md:bottom-0 w-[100%]'>
          {/* descript */}
          <div className='text-white m-3'>
            <div className='text-5xl font-semibold outfit mb-4'>Get Started</div>

            <div className='max-w-[401px] nunito-sans text-lg'>
              {`Flight - confirmed! Hotel - sorted! And now, it's time to embark on your Bali Scooter Rental adventure! If you're still uncertain about your next steps, don’t worry, as we're here to address all your queries and concerns.`}
            </div>
          </div>

          {/* avatar */}
          <Image src={Avatar} className='w-[478px] object-cover hidden md:block' alt='cichy.life avatar'/>
        </div>
      </div>
    </main>
  )
}
