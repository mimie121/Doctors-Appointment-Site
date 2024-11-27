import React from 'react'
import {assets} from '../assets/assets'

const about = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>ABOUT <span className='text-gray-800 font-medium'>US</span></p>
        </div>
             
             <div className='my-10 flex flex-col md:flex-row gap-12 '>
              <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
              <div className='flex flex-col justify-start gap-6 md
              w-2/4 text-sm text-gray-600'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ratione vitae consequatur accusantium, magni eius voluptas voluptates esse, asperiores similique dicta aut beatae voluptatibus nobis perspiciatis necessitatibus delectus labore libero!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptas id accusamus sequi pariatur magnam itaque non eligendi, sed cumque odit esse velit nihil architecto expedita reprehenderit incidunt, maxime illum?</p>
                <b className='text-gray-800'>Our Vision</b>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis natus molestiae repudiandae quidem vel necessitatibus maiores placeat, quis quia, sapiente consequuntur alias ullam vitae sit sequi nobis eaque doloremque velit?</p>
              </div>
             </div>

             <div className='text-xl my-4'>
              <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
             </div>

             <div className='flex flex-col md:flex-row '>

              <div className='border px-10 py-14 md:px-16 flex flex-col gap-5 text-[15px] hover:bg-Ccolor hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>Efficiency:</b>
                <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
              </div>

              <div  className='border px-10 py-14 md:px-16 flex flex-col gap-5 text-[15px] hover:bg-Ccolor hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>

              <b>Covenience:</b>
              <p>Access to a network of trusted healthcare professionals in your area.</p>
              </div>

              <div  className='border px-10 py-14 md:px-16 flex flex-col gap-5 text-[15px] hover:bg-Ccolor hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>

              <b>Personalization:</b>
              <p>Tailored recommendations and reminders to help you stay on top of your health.</p>

              </div>
             </div>
    </div>
  )
}

export default about