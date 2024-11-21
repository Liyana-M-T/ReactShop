import React from "react";
import './Category.css'
import { useSearchParams } from "react-router-dom";

const Category = ({ handleCategoryChange }) => {
  
  
  return (
    <div>
      <div className="categories">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mr-2 text-purpleshade-400"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6m-3 -3v6"></path>
        </svg>
        <p className="categories-hdg">Categories :</p>
      </div>
      <ul className="category-lists">
        <li onClick={()=>handleCategoryChange("category",'all')}>All</li>
        <li onClick={()=>handleCategoryChange("category",'Clothes')}>Clothes</li>
        <li onClick={()=>handleCategoryChange("category",'Electronics')}>Electronics</li>
        <li onClick={()=>handleCategoryChange("category",'Shoes')}>Shoes</li>
        <li onClick={()=>handleCategoryChange("category",'Miscellaneous')}>
          Miscellaneous
        </li>
      </ul>
      </div>
  );
};

export default Category;
