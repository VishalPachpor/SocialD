import React from 'react'
import "./Search.css"

const Search = () => {
  return (
    <div className='searchBar'>
    <div className='input-group'>
    <input type="search"
     name="Search" 
     id="Search" />
     <label htmlFor=""> Enter the address</label>
    </div>
    
    <div className='btn'>
    <button  type="submit"> Search</button>
    </div>
    </div>
  )
}

export default Search