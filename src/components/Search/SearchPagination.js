'use client'

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SearchPagination() {
    const genereParams = useSearchParams()
    const pathName = usePathname()
    const textVal = genereParams.get('text')
    const startVal = +genereParams.get('start') || 1
    return (
        <div className='SearchPaginationCnt text-blue-500 flex py-5 gap-20 justify-center'>
           
          {startVal>10 && <Link href={`${pathName}/?text=${textVal}&start=${startVal - 10}`} className='flex flex-col items-center'>
            <IoIosArrowBack />
            <span className=' hover:underline '>Previous</span>
            </Link>}
           
         {startVal <99 &&   <Link href={`${pathName}/?text=${textVal}&start=${startVal + 10}`} className='flex flex-col items-center'>
            <IoIosArrowForward />
            <span className=' hover:underline'>Next</span>
            </Link>}
       
        </div>
    )
}

export default SearchPagination
