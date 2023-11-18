'use client'
import React from 'react'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { CiCamera } from "react-icons/ci";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


function SearchHearderOptions() {
    const pathName = usePathname()
    const genereParams = useSearchParams()
    const genereVal = genereParams.get('text')
    const route = useRouter()
    function webHandle(){
        if(pathName != '/search/web'){
            route.push(`/search/web/?text=${genereVal}`)
        }
    }
    function imageHandle(){
        if(pathName != '/search/image'){
            route.push(`/search/image/?text=${genereVal}`)
        }
    }
    return (
        <div className='SearchHearderOptionsCnt flex ps-[10vw] sm:ps-[18vw] py-3 sm:py-1 shadow-sm'>
                <div className='flex text-gray-500 gap-5'>

                    <div className={`flex items-center gap-1 ${pathName==='/search/web'? 'text-blue-500':null}`}>
                    <HiMiniMagnifyingGlass />
                    <span onClick={webHandle} className={` text-sm cursor-pointer hover:underline active:underline ${pathName==='/search/web'? 'underline':null}`}>All</span>
                    </div>

                    <div className={`flex items-center gap-1 ${pathName==='/search/image'? 'text-blue-500':null}`}>
                    <CiCamera />
                    <span onClick={imageHandle} className={` text-sm cursor-pointer hover:underline active:underline ${pathName==='/search/image'? 'underline':null}`}>Images</span>
                    </div>

                </div>
        </div>
    )
}

export default SearchHearderOptions
