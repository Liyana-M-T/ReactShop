import { useState } from 'react'
import { Routes,Route} from 'react-router-dom'
import './App.css'
import Login from './Pages/Login/Login'
import Products from './Pages/Products/products'
import Signup from './Pages/Signup/Signup'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import DetailPage from './Pages/DetailPage/DetailPage'

function App() {

  return (
    <>
     <Routes>
     <Route path='/' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path='/products/:id' element={<DetailPage/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
