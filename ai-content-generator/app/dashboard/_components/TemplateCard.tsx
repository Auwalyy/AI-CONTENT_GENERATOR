import React from 'react'
import Image from 'next/image'
import { TEMPLATE } from './TemplateListSection'

function TemplateCard(item:TEMPLATE) {
  return (
    <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 hover:scale-105 cursor-pointer'>
        <Image src={item.icon} alt='icon' width={50} height={50}/>
        <h2 className='font-medium text-lg'>{item.name}</h2>
        <p className='text-gray-500 lne-champ-3'>{item.desc}</p>
    </div>
  )
}

export default TemplateCard