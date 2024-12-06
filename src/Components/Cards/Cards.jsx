import React, { useEffect ,useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import './Cards.css'


const Cards = ({key,product}) => {
    const navigate=useNavigate()
    const[expand,setExpand]=useState(false);
    const[titleExpand,setTitleExpand]=useState(false)
    // const Readmore=()=>{
    //    setExpand(!expand)
    // }
    // const fulltitle=()=>{
    //     setTitleExpand(!titleExpand)
    // }
   

  return (
    
      <div className='item'>
        <img src={product?.images} alt="" onClick={()=>navigate(`/products/${product.id}`)} /> 
            <p className='title'>
            {titleExpand? product?.title : `${product?.title?.slice(0,26)|| ""}`}
            <span className='title-expand' onClick={()=>navigate(`/products/${product.id}`)}>
                {titleExpand? "": '...'}
            </span>
            </p>
            
            <p className='description'>
                {expand ? product?.description : `${product?.description?.slice(0, 30) || ''}...`}
                <span  onClick={()=>navigate(`/products/${product.id}`)} className='read-more'>
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
