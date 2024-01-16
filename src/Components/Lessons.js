import React, {  useState } from 'react'
import { AppText, lessons } from '../Constants'
import SectionHeading from '../Shared/SectionHeading';
import {note} from '../assets/index'


const Lessons = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
  
    const filterLessons = (filter) => {
        if (filter === 'All') {
          setSelectedFilters([]);
        } else {
          if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter((item) => item !== filter));
          } else {
            setSelectedFilters([...selectedFilters, filter]);
          }
        }
      };
  
      const filteredLessons = lessons.filter((lesson) => {
        return selectedFilters.length === 0 || (lesson.types && selectedFilters.some(filter => lesson.types.includes(filter)));


      });
      
      

  return (
    <div className='flex flex-col justify-center mt-5'>
        <div className='font-avdira flex flex-row items-center justify-center px-6 md:px-0'>
        <SectionHeading firstTitle={AppText.Educ} secondTitle={AppText.Materials} />
        <img src={note} className="w-[100px] ml-5 animate-bounce" alt='logop'/>
        </div>
        <div className='flex flex-row gap-2 px-4 justify-evenly md:px-72'>
        <button onClick={() => filterLessons('All')} className='p-1 px-4 text-[#f57425] border-2 border-[#5d7e7f] rounded-md focus:text-[#f8efe6] active:bg-[#f575259a] focus:ring-[#90bab9b4] focus:bg-[#90bab9] focus:ring'>
          Всі
        </button>
        <button onClick={() => filterLessons('7')} className='p-1 px-4 text-[#f57425] border-2 border-[#5d7e7f] rounded-md focus:text-[#f8efe6] active:bg-[#f575259a] focus:ring-[#90bab9b4] focus:bg-[#90bab9] focus:ring'>
          7 клас
        </button>
        <button onClick={() => filterLessons('8')} className='p-1 px-4 text-[#f57425] border-2 border-[#5d7e7f] rounded-md focus:text-[#f8efe6] active:bg-[#f575259a] focus:ring-[#90bab9b4] focus:bg-[#90bab9] focus:ring'>
          8 клас
        </button>
        <button onClick={() => filterLessons('9')} className='p-1 px-4 text-[#f57425] border-2 border-[#5d7e7f] rounded-md focus:text-[#f8efe6] active:bg-[#f575259a] focus:ring-[#90bab9b4] focus:bg-[#90bab9] focus:ring'>
          9 клас
        </button>
        <button onClick={() => filterLessons('algebra')} className='p-1 px-4 text-[#f57425] border-2 border-[#5d7e7f] rounded-md focus:text-[#f8efe6] active:bg-[#f575259a] focus:ring-[#90bab9b4] focus:bg-[#90bab9] focus:ring'>
          Алгебра
        </button>
        <button onClick={() => filterLessons('geometry')} className='p-1 px-4 text-[#f57425] border-2 border-[#5d7e7f] rounded-md focus:text-[#f8efe6] active:bg-[#f575259a] focus:ring-[#90bab9b4] focus:bg-[#90bab9] focus:ring'>
          Геометрія
        </button>
      </div>
        <div className='grid items-center content-center grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-3 md:px-24 lg:px-48 '>
        {filteredLessons.map((item, index) => (
    <div className='h-[280px] p-2 flex flex-col m-2 rounded-lg bg-[#90bab961] transition-all ease-in-out group hover:scale-110' key={index}>
        <img src={item.image} className="h-[180px] object-cover rounded-lg" alt="imageh" />
        <h1 className='text-[14px] group-hover:scale-110 mt-2 text-center font-bold'>{item.title}</h1>
        <h1 className='text-[12px] text-gray-500 px-6 pb-3'>{item.desc}</h1>
    </div>
))}

        </div>
    </div>
  )
}

export default Lessons