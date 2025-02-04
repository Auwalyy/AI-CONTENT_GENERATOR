import { Search } from 'lucide-react'
import { Input } from 'postcss'
import React from 'react'

function SearchSection() {
  return (
    <div className='p-10 flex justify-center flex-col text-white items-center bg-gradient-to-br from-purple-500 to-purple via-purple-700 to-blue-600'>
        <h2 className='text-3xl font-bold'>Browse All Templates</h2>
        <p>What would you like to create today</p>
        <div className='w-full flex justify-center'>
            <div className="flex gap-2 items-center p-2 border w-[50%] my-5 bg-white rounded-md">
                <Search className='text-primary' />
                <input type="text" placeholder='Search' className="
                bg-transparent w-full outline-none text-black" />
            </div>
        </div>
    </div> 
  )
}

export default SearchSection