import React from 'react'
import './Search.css'
import { CiSearch } from "react-icons/ci";


function Search() {
  return (
    <div className='searching'>
      
        <input className='search' type="text" placeholder='Search anything...' />
        <span className='srh'><CiSearch /></span>
    </div>
  )
}

export default Search;