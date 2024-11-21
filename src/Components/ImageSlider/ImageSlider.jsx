import React,{useEffect, useState} from 'react'
import './ImageSlider.css'

const ImageSlider = ({imageList}) => {
  const[imageIndex,setImageIndex]=useState(0)
  return (
    <div className='image-container'>
      <div className='image-list'>
       {imageList?.map((image,index)=>(
        <img src={image} key={index} onClick={()=>setImageIndex(index)}
        className={imageIndex === index ? "image-list img opacity-30" : "image-list img"} 
        />
      ))}
       
      
      </div>
      <div className='main-image'>
        <img src={imageList?.[imageIndex]}/>

      </div>
    </div>
  )
}

export default ImageSlider
