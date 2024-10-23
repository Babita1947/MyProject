import React, { useState } from 'react'

const Bgchanger = () => {
    let [bgColor,setBgColor] = useState("white");
  return (
    <div className={`w-full h-screen flex flex-col justify-center items-center bg-${bgColor}`}>
       <div className={`w-full h-48 flex justify-center items-center font-bold text-5xl text-black `}>BgChanger</div>
       <div className='w-full  flex flex-row gap-5 justify-center items-center'>
           <box onClick = {()=>setBgColor("red-600")} className='w-28 h-28 bg-red-600 border-2 '></box>
           <box onClick = {()=>setBgColor("blue-800")} className='w-28 h-28 bg-blue-800 border-2'></box>
           <box onClick = {()=>setBgColor("green-600")} className='w-28 h-28 bg-green-600 border-2'></box>
           <box onClick = {()=>setBgColor("yellow-600")} className='w-28 h-28 bg-yellow-600 border-2'></box>
       </div>
    </div>
    

  )
}

export default Bgchanger