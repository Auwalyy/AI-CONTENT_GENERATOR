import Templates from '@/app/(data)/Templates'
import React from 'react'

export interface TEMPLATE(
    name: string,
    desc: string,
    category: string,
    icon: string,
    aiPrompt: string,
)

function TemplateListSection() {
  return (
    <div>
        {Templates.map((item,index)=> (

        ))}
    </div>
  )
}

export default TemplateListSection