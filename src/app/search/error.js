'use client'
import React from 'react'

function error({error,reset}) {
    return (
        <div className='flex flex-col gap-5 mt-5 ms-20 h-[90vh]'>
           <h1 className='text-2xl text-red-500'>Something went wrong!</h1>
            <button className='bg-red-500 w-fit text-white p-2 rounded active:scale-105' onClick={()=>{reset()}}>try again</button>
        </div>
    )
}

export default error
