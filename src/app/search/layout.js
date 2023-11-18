import React from 'react'
import SearchHeader from '../../components/Search/SearchHeader'
import Footer from '../../components/Footer'
import SearchHearderOptions from '../../components/Search/SearchHearderOptions'

function Searchlayout({children}) {
    return (
        <div>
            <SearchHeader/>
            <SearchHearderOptions/>
            {children}
            <Footer/>
        </div>
    )
}

export default Searchlayout