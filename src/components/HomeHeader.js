import Link from 'next/link'
import React from 'react'
import { CgMenuGridO } from "react-icons/cg";

function HomeHeader() {
    return (
        <div className='HomeHeaderCnt flex me-5 sm:me-20 space-x-5 items-center'>
                <Link href='#' className=' hover:underline active:underline'>Gmail</Link>
                <Link href='#' className=' hover:underline active:underline'>Images</Link>
                <div className=' text-2xl hover:bg-slate-300 rounded-full p-1 cursor-pointer'><CgMenuGridO /></div>
                <button className=' bg-blue-500 text-white py-1 px-3 rounded'>Sign in</button>
        </div>
    )
}

export default HomeHeader
