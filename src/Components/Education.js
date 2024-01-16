import React from 'react';
import { AppText, workDetail } from '../Constants';
import videoSrc from '../assets/phantom.mp4'; 

const Education = () => {
  return (
    <div className='mt-10' id="education">
      <h1 className='font-avdira text-[40px] text-center font-bold ml-4'>{AppText.Education}<span className='text-[#f57425]'>{AppText.Lesson}</span></h1>
      <div className='flex flex-col md:flex-row justify-evenly items-center md:px-8'>
        <div className='mt-[70px] flex flex-row justify-center items-center mb-8 md:mb-0'>
          <video autoPlay muted loop className="w-[550px] hover:animate-bounce">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='flex mt-5 flex-col justify-end md:mt-0 lg:mt-0'>
          {workDetail.map((item, index) => (
            <div className='flex flex-row mb-6 w-[290px]' key={index}>
              <div className='mr-7 font-bold'>
                <h2>{item.year}</h2>
              </div>
              <div>
                <h3 className='font-bold w-full'>{item.university}</h3>
                <h3 className='font-thin text-[15px] text-gray-400'>{item.position}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
