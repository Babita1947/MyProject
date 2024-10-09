import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";


const Counter = () => {
    //let counter = 16;
    let [counter, setCounter] = useState(16);

    const addValue = () => {
        counter += 1;
        setCounter(counter);
        // console.log("clicked", counter);
    }

    const removeValue = () => {
        counter -= 1;
        setCounter(counter);
        // console.log("clicked", counter);
    }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[40%] h-96 mx-auto bg-slate-800 text-white rounded-3xl'>
            <h1 className='my-8 text-center text-5xl font-bold'>Counter value: {counter}</h1>
            <div className='font-bold flex flex-col justify-center items-center'>
                <div 
                onClick={addValue}
                className='flex gap-3 p-4 m-2 bg-white text-slate-900  hover:border-yellow-400 border-4 rounded-xl'>
                    <button >Add Value: </button>
                    <FaPlusCircle className='mt-1'/></div>
                <div 
                onClick={removeValue}
                className='flex gap-3 p-4 m-2 bg-white text-slate-900  hover:border-yellow-400 border-4 rounded-xl'>
                    <button >Remove value: </button>
                    <FaMinusCircle className='mt-1'/>
                </div>
                <footer>Footer: {counter}</footer>
            </div>
            
        </div>
    </div>
  )
}

export default Counter