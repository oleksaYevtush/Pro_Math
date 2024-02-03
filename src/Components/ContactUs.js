import React from 'react'
import { contactusbg, girllaptop } from '../assets'
import { AppText } from '../Constants'
import SectionHeading from '../Shared/SectionHeading'
function ContactUs() {
  return (
    <div id="contact" className='flex flex-col justify-center mt-5'>
        <div className='flex flex-row justify-center'>
        <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Us}/>
        <img src={girllaptop} className="w-[80px] ml-4" alt='contacts'/>
        </div>
        <div className='grid grid-cols-1 px-10 md:grid-cols-2 justify-evenly md:px-44'>
            <img src={contactusbg} className="w-[300px] mr-10" alt='contacts'/>
           <div className='w-full'>
           <div className='flex flex-col '>
            <label className='text-gray-400 '>Електронна Пошта</label>
            <input type="text"  placeholder='yourname@gmail.com'
             className='border-[1.5px] px-2 border-purple-300 
              hover:border-purple-500 rounded-md'  />
            </div>
            <div className='flex flex-col'>
            <label className='text-gray-400 '>Ваше Повідомлення</label>
            <textarea type="text" rows={7} placeholder='Type your message here'
             className='border-[1.5px] px-2 hover:border-[#01adb3bb] border-purple-300 rounded-md'  />
           <button className='transition-all ease-in-out hover:scale-110 bg-[#01adb392] flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-[#f8efe6] rounded-md'>
           Відправити
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

            </button>
            </div>
            
          
         
          
           </div>
           
           
        </div>
    </div>
  )
}

export default ContactUs