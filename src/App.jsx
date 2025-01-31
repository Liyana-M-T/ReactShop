import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/products';
import Signup from './Pages/Signup/Signup';
import DetailPage from './Pages/DetailPage/DetailPage';


const ProtectedRoute = ({ children }) => {
  
  const jwtPayload = Cookies.get('access_token');
  console.log(jwtPayload, 'jwt pa');

  if (!jwtPayload) {
    return <Navigate to="/login" />;
  } else{
    return children;
  }
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
          path="/products/:id/:category"
          element={
            <ProtectedRoute>
              <DetailPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
