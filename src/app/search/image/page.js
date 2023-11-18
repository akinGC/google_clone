
import Link from 'next/link'
import React from 'react'
import SearchPagination from '../../../components/Search/SearchPagination';

async function SearchImagepage({searchParams}) {
    const getGenere= searchParams.text
    const getStartNum = +searchParams.start || 1
    const req = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.google_Ai_key}&cx=${process.env.gogole_csc}&q=${getGenere}&searchType=image&start=${getStartNum}`, { next: { revalidate: 3600 } });

    const resp  =await req.json()
    console.log(resp)
    return (
        <div className='min-h-[80vh] px-5 '>
           <div className=' text-xs pt-2 pb-4 text-gray-600'>About {resp.searchInformation.totalResults} results.({resp.searchInformation.searchTime}) seconds</div>
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-10'>
                {
                    resp  && resp?.items?.map((itm,key)=>(
                        <div className='h-[35vh] pb-7 hover:shadow-md p-2'key={key}>
                           {itm.link && <a target="_blank" rel="noopener noreferrer"href={`https://${itm.displayLink}`}>
                          
                              <div className='flex items-center justify-center'>  <img className='h-[25vh]' src={itm.link} alt={itm.title}/></div>
                                <p className=' hover:underline text-sm text-center pt-2' dangerouslySetInnerHTML={{ __html: itm.htmlSnippet }}></p>
                      </a>}
                        </div>
                    ))
                }
            </div>
            <SearchPagination/>
        </div>
    )
}

export default SearchImagepage
