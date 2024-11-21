import React,{useState,useEffect} from 'react'
import './ProductList.css'
import axios from "../../Axios"
import { useParams, useSearchParams } from 'react-router-dom'
import Category from '../Category/Category'
import Search from '../Search/Search'
import Cards from '../Cards/Cards'


const ProductList = () => {
  const[data,setData]=useState([])
  const[filteredData,setFilteredData]=useState([])
  const [searchParams,setSearchParams]=useSearchParams();
  const category=searchParams.get('category');
  const search =searchParams.get('search')
  

  const updateSearchParams = (key, value) => {
    const newParams = new URLSearchParams(searchParams);

    if (value) {
      newParams.set(key, value); // Add or update the parameter
    } else {
      newParams.delete(key); // Remove the parameter if the value is falsy
    }

    setSearchParams(newParams);
  };
  
 const updateCategoryParams = (key,value)=>{
  const params= new URLSearchParams(searchParams);

  if(value){
    params.set(key,value);
  }else{
    params.delete(key)
  }
  setSearchParams(params)
  }
 
 
 

  


  useEffect(()=>{
     axios.get().then((response)=>{
      setData(response.data)
     })
  },[]) 

  useEffect(()=>{
    
    if(category&& category!='all'){
      const filter = data?.filter((products)=>{
        if (products?.category?.name === category) {
          console.log(products,'catgryFiltrng');
          return products
        }
      })
       console.log(filter, "filterrr");
       
      setFilteredData(filter)
    } else {
      setFilteredData(data);
      // console.log(filteredData, "filtered data")
    }
  },[category,data])
  useEffect(()=>{
    if(search){
      console.log("searching")
      const filterSearch=data?.filter((searchPdts)=>{
        if(searchPdts?.title===search){
          return searchPdts 
        }
      })
      setFilteredData(filterSearch)
    }else {
      setFilteredData(data);
    }
  },[search])

 
  return (
    <div className='banner'>
      <div className='left-section'>
    <Search data={data} handleSearch={updateSearchParams} />
    <div className='container'>
    {filteredData?.map((product) => {
      
  return <Cards key={product.id} product={product} />;
     })}
    </div>
    
    </div>
    <div className='right-section'>
    <Category handleCategoryChange={updateCategoryParams} /></div>
      </div>
     
     
             
             
       
    
     
     
    
  )
}

export default ProductList
