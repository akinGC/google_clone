import React from 'react'
import FooterLocation from './FooterLocation'

function Footer() {
    return (
        <div className='ftCnt min-w-full bg-gray-100 '>
            <div className=' border-b-2 ps-3 sm:ps-20 py-1 text-sm'><FooterLocation/></div>
            <div className='flex gap-3 justify-between px-3 sm:px-20 py-1 flex-col sm:flex-row'>
                <ul className='flex gap-3   text-md'>
                    <li className=' cursor-pointer hover:underline text-sm'>About</li>
                    <li className=' cursor-pointer hover:underline  text-sm'>Advertising</li>
                    <li className=' cursor-pointer hover:underline  text-sm'>Businesses</li>
                    <li className=' cursor-pointer hover:underline  text-sm'>How Search Works</li>
                </ul>
                <ul className='flex gap-3'>
                    <li className=' cursor-pointer hover:underline  text-sm'>Privacy</li>
                    <li className=' cursor-pointer hover:underline  text-sm'>Terms</li>
                    <li className=' cursor-pointer hover:underline  text-sm'>Settings</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
