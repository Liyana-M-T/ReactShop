import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/products';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import DetailPage from './Pages/DetailPage/DetailPage';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  
  const jwtPayload = Cookies.get('access_token');
  console.log(jwtPayload, 'jwt pa');

  if (!jwtPayload) {
    return <Navigate to="/login" />;
  }
 
  return children
  // return <Navigate to="/" />;
};

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
            <Products />
             </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <DetailPage />
            </ProtectedRoute>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
