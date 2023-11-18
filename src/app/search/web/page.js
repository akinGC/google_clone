
import Link from 'next/link'
import React from 'react'
import SearchPagination from '../../../components/Search/SearchPagination'

async function SearchWebpage({searchParams}) {
    const getGenere= searchParams.text
    const getStartNum = +searchParams.start || 1
    let req = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.google_Ai_key}&cx=${process.env.gogole_csc}&q=${getGenere}&start=${getStartNum}`, { next: { revalidate: 3600 } })
   
    const resp  =await req.json()
    console.log(resp)
    return (
        <div className='min-h-[80vh] sm:w-[55%] sm:ms-52'>
           <div className=' text-xs pt-2 pb-4 text-gray-600'>About {resp.searchInformation.totalResults} results.({resp.searchInformation.searchTime}) seconds</div>
            <div className=''>
                {
                    resp  && resp?.items?.map((itm,key)=>(
                        <div className=' pb-7'key={key}>
                            <h5 className=' text-sm'>{itm.link}</h5>
                            <Link href={itm.link} className=' hover:underline font-medium text-blue-800'>{itm.title}</Link>
                            <p className='text-gray-500 text-sm'>{itm.snippet}</p>
                        </div>
                    ))
                }
            </div>
            <SearchPagination/>
        </div>
    )
}

export default SearchWebpage
