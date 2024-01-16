import React from 'react'

const SectionHeading = ({firstTitle,secondTitle}) => {
  return (
   <div>
     <h1 className='text-[40px] font-bold font-avdira'>{firstTitle}
        <span className='text-[#f57425]'>{secondTitle}</span></h1>
        
   </div>
  )
}

export default SectionHeading