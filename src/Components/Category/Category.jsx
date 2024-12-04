import React, { useState } from "react";
import './Category.css'


const Category = ({ handleCategoryChange }) => {
  const[active,setActive]=useState("all");
   const onClick=(Category)=>{
    handleCategoryChange('category',Category)
    setActive(Category)
   
   }
  

  return (
    <div className="category-container">
      <div className="categories">
        <svg
          stroke=" #703bf7"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="2em"
          width="1.3em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6m-3 -3v6"></path>
        </svg>
        <p className="categories-hdg">Categories :</p>
      </div>
      <ul className="category-lists">
        <li 
        className={`${active==='all' ? "active-style" : ""}`} 
         onClick={()=>onClick("all")}>All</li>
        <li 
         className={`${active==='Clothes' ? "active-style" : ""}`} 
         onClick={()=>onClick('Clothes')}>Clothes</li>
        <li
          className={`${active==='Electronics' ? "active-style" : ""}`} 
         onClick={()=>onClick('Electronics')}>Electronics</li>
        <li  
        className={`${active==='Shoes' ? "active-style" : ""}`} 
        onClick={()=>onClick('Shoes')}>Shoes</li>
        <li 
        className={`${active==='Miscellaneous' ? "active-style" : ""}`} 
        onClick={()=>onClick('Miscellaneous')}>
          Miscellaneous
        </li>
      </ul>
      </div>
  );
};

export default Category;
