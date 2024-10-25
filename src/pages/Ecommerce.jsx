import React, { useEffect, useState } from 'react'
import useFetchData from '../hooks/useFetchData'

const Ecommerce = () => {
    const data = useFetchData("https://fakestoreapi.com/products");
    console.log("data in our components", data);

    
    return (
        <div className='w-[80%] mx-auto text-white border-2 border-yellow-400'>
            <h1 className='text-center text-3xl font-bold'>Ecommerce Application</h1>
            <div className='flex flex-wrap gap-3 justify-center items-center my-4 text-sm'>
                {
                    data.map((item)=>{
                        return (
                            <div key={item.id} className='flex flex-col gap-1 w-[30%] h-96 border-l border-yellow-400 p-2'>
                                <img src={item.image} className='h-[60%]'/>
                                <p className='text-white '>{item.title}</p>
                                <p className='text-wrap font-thin '>Rose Gold Plated Double Flared Tunnel Plug Earrings.........</p>
                                <p className='font-bold text-yellow-400'>{item.price} Rs</p>
                                <p>{item.rating.rate}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ecommerce