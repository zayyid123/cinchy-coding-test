'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

// image
import BgImage from './assets/image/bg.png'
import Avatar from './assets/image/avatar.png'
import { GetAllDataFaq } from './services/faqServices'
import Devider from './components/Devider'
import CardCategoryDesktop from './components/CardCategoryDesktop'

export default function Home() {
  const [allDataFAQ, setallDataFAQ] = useState()
  const [allDataTopic, setallDataTopic] = useState()
  const [selectedTopic, setselectedTopic] = useState(0)

  // function to get topic from array
  const getTopicFromArray = (data) => {
    const topicCounts = {};

    data.forEach(item => {
      const { topic } = item;
      if (topicCounts[topic]) {
        topicCounts[topic].count++;
      } else {
        topicCounts[topic] = { topic, count: 1 };
      }
    });
    
    // new array
    const uniqueTopics = []

    // add all data
    uniqueTopics.push({topic: 'All', count: data.length})

    // add data unique topics
    Object.values(topicCounts).forEach(item => {
      uniqueTopics.push(item)
    })

    return uniqueTopics
  }

  useEffect(() => {
    const getAllDataFaqFromServices = async() => {
      const response = await GetAllDataFaq()
      setallDataFAQ(response.data)
      setallDataTopic(getTopicFromArray(response.data))
    }

    getAllDataFaqFromServices()
  }, [])

  return (
    <main className="flex justify-start items-center flex-col max-w-[1440px] m-auto">
      {/* image */}
      <div
        className='mt-[89px] relative bg-red-100'
      >
        {/* bg image */}
        <Image src={BgImage} className='object-cover h-[500px]' alt='cichy.life bg'/>
        
        <div className='flex justify-evenly items-center absolute bottom-[26%] md:bottom-0 w-[100%]'>
          {/* descript */}
          <div className='text-white m-3'>
            <h2 className='text-5xl font-semibold outfit mb-4'>Get Started</h2>

            <p className='max-w-[401px] nunito-sans text-lg'>
              {`Flight - confirmed! Hotel - sorted! And now, it's time to embark on your Bali Scooter Rental adventure! If you're still uncertain about your next steps, don’t worry, as we're here to address all your queries and concerns.`}
            </p>
          </div>

          {/* avatar */}
          <Image src={Avatar} className='w-[478px] object-cover hidden md:block' alt='cichy.life avatar'/>
        </div>
      </div>

      {/* content */}
      <div className='bg-[#f2f7f5] w-full'>
        {/* inner content */}
        <div className='mt-[55px] flex justify-evenly items-center md:items-start flex-col md:flex-row'>
          {/* category desktop */}
          <div
            className='bg-white p-6 rounded-[20px] border border-[#E5E3E8] hidden md:block mx-4'
          >
            {
              allDataTopic &&
              allDataTopic.map((item, index) => 
                <div key={'topic'+index}>
                  <CardCategoryDesktop 
                    selectedTopic={selectedTopic} 
                    setselectedTopic={setselectedTopic} 
                    indexTopic={index} 
                    itemTopic={item}
                  />

                  {/* devider */}
                  <Devider/>
                </div>
              )
            }
          </div>

          {/* category mobile */}
          <div className='md:hidden relative bg-red-200 w-[90%]'>
            <div className='absolute top-[-70px] bg-white px-6 py-4 rounded-[20px] border border-[#E5E3E8] text-[#04332D] w-full'>
              <select 
                className="bg-gray-50 outfit text-[#04332D] text-base font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                onChange={(e) => {
                  setselectedTopic(e.target.value)
                }}
              >
                {
                  allDataTopic &&
                  allDataTopic.map((item, index) => 
                    <option key={'optionTopicsMobile'+index} value={index} defaultValue={index === selectedTopic} >{item.topic} ({item.count})</option>
                  )
                }
              </select>
            </div>
          </div>

          {/* FAQ */}
          <div>
            {/* selected FAQ */}
            <div
              className='hidden md:block'
            >
              {
                allDataTopic &&
                <h2 className='min-h-[88px] mb-[21px] outfit text-4xl font-semibold mx-4'>{allDataTopic[selectedTopic].topic}</h2>
              }
            </div>

            {/* card FAQ */}
            <div>
              {
                allDataFAQ &&
                allDataFAQ.map((item) => 
                  <div key={'cardtopic'+item._id}>
                    <div 
                      className='bg-white p-6 rounded-[20px] border border-[#E5E3E8] text-[#04332D] mb-4 mx-4'
                    > 
                      {/* title faq */}
                      <h1 className='outfit font-normal text-[38px] mb-[34px] max-w-[776px]'>{item.title}</h1>

                      {/* short info */}
                      <p className='outfit text-base font-normal mb-[34px] max-w-[776px]'>{item.shortInfo}</p>

                      <Devider/>

                      {/* longinfo */}
                      <p className='outfit text-base font-normal mt-[34px] max-w-[776px]'>{item.longInfo}</p>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
