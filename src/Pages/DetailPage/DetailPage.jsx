import React,{useState,useEffect} from 'react'
import axios from '../../Axios'
import { useParams,Link } from 'react-router-dom';
import './DetailPage.css';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';


const DetailPage = () => {
    const[product,setProduct]=useState([]);
    const {id}=useParams();
    console.log(product,"234");
    
    useEffect(()=>{
      console.log(useEffect,'eee');
      
      axios.get(id).then((response)=>{
        setProduct(response.data)
      })
    },[])

  console.log();
  
    
  return (
    
    <div  className='detail-page'>
      <header>
      <Link to='/'>
      <button className='back-btn'>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-grayshade-400 dark:text-white mr-2" height="1em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
        Back</button>
      </Link></header>
   <div className='detail-container'>
   <div className='detail-container-left'>
    
   <ImageSlider 
   imageList={product.images}
  
   />

      </div>
      <div className='detail-container-right'>
        <div className="title">
        <p >{product?.title}</p>
        <span className='category-name'>{product?.category?.name}</span>
        </div>
        <p className='description'>{product?.description}</p>
        <div className='item-bottom'>
        <div className='price'>
                    <p className='price-text'>Price</p>
                    <p className='price-tag'>${product?.price}</p>
        </div>
        <button>Add To Cart</button>
        </div>
    </div>
    </div>
    </div>
   
  )
}

export default DetailPage
