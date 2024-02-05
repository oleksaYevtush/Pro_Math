import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './../assets';
import './../Components';
import wave from './../assets/wave.svg';
import { aboutSection, AppText } from '../Constants';

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="aboutme"
      className='mt-[130px] relative'
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeIn}
      transition={{ duration: 2.5 }}>
      <div
        className='relative items-center justify-center w-full'
        style={{ backgroundImage: `url(${wave})`, backgroundSize: 'cover', height: '350px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <h1 className='font-avdira text-[#353d29] text-[50px] pt-[20px] font-bold text-center'>Як це <span className='text-[#f57425b5]'>Працює</span></h1>
        <p className='w-full px-10 md:px-32 lg:px-30 mt-[35px] mb-[25px] text-[#353d29e8] font-garden'>{AppText.aboutMeDescripion} </p>
      </div>
      <div className='flex flex-col md:flex-row mt-[105px] md:px-32 '>
        {aboutSection.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center justify-center w-full py-2 m-2 rounded-lg group md:hover:bg-[#f57425]"
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 1, delay: index * 0.2 }}>
            <img src={item.image} className="w-[230px] rounded-lg h-[170px] object-cover" alt='laptop' />
            <h1 className='font-bold md:group-hover:text-[#f8efe6]'>{item.title}</h1>
            <h1 className='text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7'>{item.desc}</h1>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutMe;
