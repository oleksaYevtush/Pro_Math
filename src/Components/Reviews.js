import React from 'react'
import SectionHeading from '../Shared/SectionHeading'
import { AppText } from '../Constants'

const Reviews = () => {
  return (
    <div id='reviews' className='bg-[#90bab961] p-10'>
      <div className='flex flex-col items-center justify-center'>
        <SectionHeading firstTitle={AppText.Reviews} secondTitle={AppText.Students} />

        <div className='m-3'>
          <p className='text-3xl font-bold'>Коцан Богдан</p>
          <p className='text-lg font-semibold'>7-9 класи</p>
          <div className='flex'>
            <span role="img" aria-label="star">⭐⭐⭐⭐⭐</span>
          </div>
          <p className='text-lg mt-3'>
            Головна ціль, яку ми хотіли досягти на літніх канікулах - це повторити весь курс математики з 5 по 8 класи.
            Завдяки учительці Лялі Євтушенко мій син досяг бажаного результату. Щира подяка від нас за вашу увагу.
            Ви талановита вчителька! Рекомендую усім Bukischool. Гроші витрачені недаремно. А якщо потрібно підтягнути
            математику - до Лялі Євтушенко. З нею ви даремно не витратите свій час.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Reviews
