import React from 'react'
import { AppText } from '../Constants'

const Footer = () => {
  return (
    <div className='bg-[#d0d9d1] mt-10 p-20 items-center flex flex-col  px-10 md:px-80'>
     <div className='flex gap-4'>
        </div>
        <h1 className='text-gray-500 text-[15px] mt-4'>{AppText.copywriteText}</h1>
    </div>
  )
}

export default Footer