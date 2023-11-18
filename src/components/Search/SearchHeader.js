import React from 'react'
import { MdOutlineSettings } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import SearchHeaderInput from './SearchHeaderInput';
import Link from 'next/link';

function SearchHeader() {
    return (
        <>
        <div className='SearchHeaderCnt hidden sm:flex min-w-full sticky bg-white top-0 items-center mt-1'>
            <Link href='/'><img className='shLogo scale-50' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'></img></Link>
            <div className='sh-input ms-10'>
                <SearchHeaderInput/>
            </div>
            <div className='sh-end flex gap-5 items-center  absolute right-5'>
                <MdOutlineSettings className='text-2xl text-gray-500' />
                <CgMenuGridO className='text-2xl text-gray-500' />
                <button className=' bg-blue-500 text-white py-1 px-3 rounded '>Sign in</button>
            </div>
        </div>

        {/* mobile  */}
        <div className='SearchHeaderCnt sm:hidden inline mt-3'>
           <div className='flex items-center justify-between'>
           <Link href='/'><img className='shLogo scale-50 relative -left-10' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'></img></Link>
            <button className=' bg-blue-500 text-white py-1 px-3 rounded me-2'>Sign in</button>

           </div>
            <div className='sh-input flex justify-center mt-2'>
                <SearchHeaderInput/>
            </div>

        </div></>
    )
}

export default SearchHeader
