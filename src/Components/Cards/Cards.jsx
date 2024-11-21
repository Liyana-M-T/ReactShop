import React, { useEffect ,useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import './Cards.css'
import axios from '../../Axios'

const Cards = ({key,product}) => {
    const navigate=useNavigate()
    const[expand,setExpand]=useState(false);
    
    const Readmore=()=>{
       setExpand(!expand)
    }
   

  return (
    
      <div className='item'>
        <img src={product?.images} alt="" onClick={()=>navigate(`/products/${product.id}`)} /> 
            <p className='title'>{product?.title}</p>
            <p className='description'>
                {expand ? product?.description : `${product?.description?.slice(0, 30) || ''}...`}
                <span onClick={Readmore} className='read-more'>
                    {expand ? 'Read less' : 'Read More'}
                </span>
            </p>
            <span className='category-name'>{product?.category?.name}</span>
            <div className='item-bottom'>
                <div className='price'>
                    <p className='price-text'>Price</p>
                    <p className='price-tag'>${product?.price}</p>
        </div>
        <button>Add To Cart</button>
         </div>

         
         </div>
            
  )
}

export default Cards
