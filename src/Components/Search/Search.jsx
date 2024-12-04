import React,{useEffect, useState} from 'react'
import './Search.css'


const Search = ({handleSearch} ) => {
  const[input,setInput]=useState('');
  const handleInput=(e)=>{
  setInput(e.target.value) 
  }
 
 

  return (
    
    <div className="search">
      <button className="search-btn" onClick={() => handleSearch("search", input)}>
        <svg
          class="svg-icon"
          stroke="white"
          fill="white"
          stroke-width="0"
          version="1.1"
          id="search"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
         
        style={{ backgroundColor: "#703BF7" }}
          height=".5em"
          width=".5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
z"
            ></path>
          </g>
        </svg>
        {/* <svg stroke="white" fill="violet" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" class="bg-purpleshade-400 p-1 w-7 h-7 text-white rounded-lg " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"></path></g></svg> */}
      </button>
      <input id="text" type="text" placeholder="Search..."
       value={input} onChange={handleInput}
     
      />
    </div>

    
  
  )
}

export default Search
