import React, { useEffect } from 'react';
import { AppText } from './../Constants';
import './../assets';
import { homeImage } from './../assets';
import { click } from './../assets';
import './Home.css';
import Typewriter from 'typewriter-effect';
import { useAnimation } from 'framer-motion';

const Home = () => {
  const controls = useAnimation();
  useEffect(() => {
    const iconAnimation = () => {
      controls.start({
        translateY: [0, -20, 0],
        transition: { duration: 3, repeat: Infinity },
      });
    };

    iconAnimation();
  }, [controls]);

  return (
    <div className='flex pt-[25px] pl-24 md:pl-24 justify-between flex-col md:flex-row'>
      <div className='flex flex-row justify-end w-full'>
        <div className='flex flex-col items-start content-end w-full'>
          <div className='shadow-2xl absolute left-0 top-[15px] w-[60px] h-[140px] text-[#f5efef] bg-[#e5915d] rounded-xl text-center'>
            <p className='text-[15px] font-bold ml-4 mt-5 text-center [writing-mode:vertical-rl]'>ЗАМОВИТИ</p>
          </div>
          <div className='shadow-2xl absolute top-[15px] left-[100px] mb-[10px] border-[15px] border-[#00999e] w-[300px] h-[140px] bg-[#e0e0e0] rounded-3xl text-center'>
            <p className='text-[15px] font-bold mt-4'>МАТЕМАТИКА</p>
            <p className='text-[25px] uppercase font-bold'>Готові уроки</p>
            <p className='text-[15px] font-bold'>7 - 9 класи</p>
          </div>
          <img
            src={click} 
            alt="Click"
            className="object-cover w-[40px] rounded-3xl"
            style={{ transform: 'rotate(-45deg)', position: 'absolute', top: '105px', left: '330px', zIndex: '3' }}
          />
          <h1 className='mt-[65px] text-[35px] md:text-[40px] font-bold '>{AppText.hello}</h1>
          <div className='flex'>
            <h1 className='text-[35px]  md:text-[40px] font-bold mr-3'>{AppText.Iam}</h1>
            <Typewriter
              options={{
                strings: [AppText.LyalyaYevtushenko, AppText.Teacher, AppText.Math],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div>
            <h1 className='my-4 text-[#353d29] font-garden'>
              Математика - це насправді дуже цікаво й корисно. Особливо, якщо наповнити уроки яскравими прикладами. Бо, якщо тема
              зрозуміла, то навчитись розв'язувати прикладні задачі це лише діло практики. До речі, за освітою я економіст-кібернетик
            </h1>
          </div>
          <button className="shadow-lg mt-2 relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-[210px] rounded-md bg-[#007175] p-2 flex justify-center items-center font-extrabold">
            <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#00999E] delay-150 group-hover:delay-100"></div>
            <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#00c0c797] delay-150 group-hover:delay-150"></div>
            <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#75afb1] delay-150 group-hover:delay-200"></div>
            <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#dfeff0] delay-150 group-hover:delay-300"></div>
            <p className="z-10 text-[#353d29]">УРОКИ</p>
          </button>
        </div>
      </div>
      <div className='relative flex items-start justify-center w-full'>    
        <div className='w-[200px] md:w-[300px] rounded-md relative'>
          {/* Icons Math 
          <motion.img
            ref={iconRef}
            src={iconFive}
            alt='icon4'
            width='50'
            style={{ position: 'absolute', top: '110px', left: '-55px', zIndex: '2' }}
            animate={controls}
          />
          <motion.img
            ref={iconRef}
            src={iconFirst}
            alt='icon1'
            width='50'
            style={{ position: 'absolute', top: '-5px', left: '-20', zIndex: '2' }}
            animate={controls}
          />
          <motion.img
            ref={iconRef}
            src={iconSecond}
            alt='icon2'
            width='50'
            style={{ position: 'absolute', top: '-35px', left: '125px', zIndex: '2' }}
            animate={controls}
          />
          <motion.img
            ref={iconRef}
            src={iconThird}
            alt='icon3'
            width='50'
            style={{ position: 'absolute', top: '-5px', left: '250px', zIndex: '2' }}
            animate={controls}
          />
          <motion.img
            ref={iconRef}
            src={iconFourth}
            alt='icon4'
            width='50'
            style={{ position: 'absolute', top: '115px', left: '300px', zIndex: '2' }}
            animate={controls}
          />
          Icons Math */}
          <img src={homeImage} className="object-cover w-full h-full rounded-3xl" alt='home' />
          <div className="shadow-xl absolute right-[-53px] rounded-3xl text-center w-[430px] py-4 px-6 bg-[#dfeff0]">
            <p className='leading-4 text-[15px] text-black font-garden'>Математика - це насправді дуже цікаво й корисно. Особливо, якщо наповнити уроки яскравими прикладами. Бо, якщо тема зрозуміла, то навчитись розв'язувати прикладні задачі це лише діло практики. До речі, за освітою я економіст-кібернетик</p>
          </div>
          
        </div>
      </div>   
    </div>
  );
};

export default Home;
