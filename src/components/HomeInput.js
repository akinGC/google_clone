'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoMic } from "react-icons/io5";

function HomeInput() {
    const [input,setInput] = useState('')
    const [loading,setLoading] = useState(false)
    const routes = useRouter()
    function submitHandle(e){
        e.preventDefault()
        if(input.trim()){
            routes.push(`/search/web/?text=${input}`)
        }
    }

   async function RandomWordGenerate(){
    setLoading(true);
        const req = await fetch('https://random-word-api.herokuapp.com/word')
        const resp = await req.json()
        routes.push(`/search/web/?text=${resp}`)
        console.log(resp)
        setLoading(false);
   }
    return (
        <div className='flex flex-col justify-center mt-7 items-center'>
            <form onSubmit={submitHandle} className=' sm:w-[40%] px-4 py-1 flex justify-between items-center rounded-full border hover:shadow-md'>
                <HiMiniMagnifyingGlass className=' text-xl text-slate-400 me-2' />
                <input type='text' className=' outline-none  flex-grow'value={input} onChange={(e)=>{setInput(e.target.value)}} />
                <IoMic className=' text-xl text-blue-400' />

            </form>
            <div className='flex flex-col sm:flex-row gap-5 sm:gap-20 mt-10'>
                <button className='border rounded px-2 py-1 googleHomeBtn active:shadow-md' onClick={submitHandle}>Google Search</button>
                <button disabled={loading} className='flex justify-center border rounded px-2 py-1 googleHomeBtn active:shadow-md' onClick={RandomWordGenerate}>{!loading?'I Am Feeling Lucky':<img className='w-10 scale-150' src='https://i.pinimg.com/originals/49/db/58/49db58121197c490352b4ab3d978b6b0.gif'></img>}</button>
            </div>
        </div>
    )
}

export default HomeInput
