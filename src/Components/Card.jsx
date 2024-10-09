import React from 'react'

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";



export const Card = ({item}) => {
    console.log(item);

  return (
    <div className='w-full h-96  my-5 flex justify-center items-center'>
          <div className='w-[60%] flex justify-center items-center'>
             <div>
              <FaAngleLeft className='text-[#6625FC] text-5xl'/>
             </div>
             <div className='flex justify-center align-middle gap-8'>
                <div>
                  <img src={item.img} alt="todo" className='h-64 rounded-lg'/>
                </div>
                <div className='flex flex-col gap-y-3 justify-center items-start'>
                  <h1 className='font-bold text-3xl'>{item.title}</h1>
                  <p className='text-[#6D6A7C]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel provident recusandae voluptate.</p>
                  <div className='flex gap-5 bg-[#6625FC] p-4 m-1  rounded-lg text-white font-bold '>
                    <button className=''>Check out</button>
                    <div className='flex justify-center items-center'>
                     <FaArrowRight className='text-white'/>
                    </div>
                    
                  </div>
                </div>
             </div>
             <div>
              <FaAngleRight className='text-[#6625FC] text-5xl'/>
             </div>
          </div>

      </div>
  )
}
