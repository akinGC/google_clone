
import React from 'react'
import { FaCircle } from "react-icons/fa";

async function FooterLocation() {
    const req = await fetch('https://extreme-ip-lookup.com/json/?key=CoxaDsBJfRlcbxPzw3SN')
    const resp = await req.json()

    return (
        <div className=' flex items-center gap-1'>
            {resp.country}<FaCircle className='text-xs text-green-700'/>

        </div>
    )
}

export default FooterLocation
