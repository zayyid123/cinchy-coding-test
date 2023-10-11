import React from 'react'

const CardCategoryDesktop = ({ selectedTopic, setselectedTopic, indexTopic, itemTopic }) => {
  return (
    <div 
      className={`${selectedTopic === indexTopic && 'bg-[#00332C1A]'} min-w-[264px] mb-[15px] mt-[11.5px] rounded-tr-[10px] rounded-br-[10px] cursor-pointer hover:bg-[#eee]`}
      onClick={() => {
        setselectedTopic(indexTopic)
      }}
    >
      <h4 className='py-4 text-[#04332D] outfit text-base font-normal'>{itemTopic.topic} ({itemTopic.count})</h4>
    </div>
  )
}

export default CardCategoryDesktop