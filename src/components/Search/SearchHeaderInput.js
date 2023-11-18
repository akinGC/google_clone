'use client'
import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { IoMic } from "react-icons/io5";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useRouter, useSearchParams } from 'next/navigation';

function SearchHeaderInput() {
    const params = useSearchParams()
    const [input,setInput] = useState(params.get('text')||'')

    const route = useRouter()
    function submitHandle(e){
        e.preventDefault()
        if(input.trim()){
            route.push(`/search/web/?text=${input}`)
        }
    }
    return (
        <form onSubmit={submitHandle} className='flex sm:w-[40vw] border rounded-full p-2 justify-between'>
            <input type='text' placeholder='Search...' className='flex-grow ps-2 outline-none border-none' value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <div className='flex gap-2 items-center'>
            <IoCloseOutline className='text-xl  cursor-pointer active:scale-125' onClick={()=>{setInput('')}}/>
            <HiMiniMagnifyingGlass className='text-2xl text-blue-500 border-l-2 ps-1'/>
            <IoMic className='text-xl text-blue-500'/>
            </div>

        </form>
    )
}

export default SearchHeaderInput
