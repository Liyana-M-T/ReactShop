import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Header.css';
import { FaGithub } from 'react-icons/fa';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'; 


const Header = () => {
  const navigate = useNavigate();
  const [showThemeSwitcher, setShowThemeSwitcher] = useState(false); 

  return (
    <div className="">
      <div className="header">
        <div className="header-left-section">
          <h1 onClick={() => navigate('/products')}>React Shop</h1>
        </div>
        <div className="header-right-section">
          <button className="login-btn" onClick={() => navigate('/login')}>
            <svg
              style={{ marginRight: '.5rem' }}
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path>
              <path d="M3 12h13l-3 -3"></path>
              <path d="M13 15l3 -3"></path>
            </svg>
            Login
          </button>
          <button className="signup-btn" onClick={() => navigate('/Signup')}>
            <svg
              style={{ marginRight: '.5rem' }}
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M16 19h6"></path>
              <path d="M19 16v6"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
            </svg>
            Sign Up
          </button>
          <button
            onClick={() => setShowThemeSwitcher(!showThemeSwitcher)} 
          >
          
            <svg
              className="screen-svg"
              stroke="#0ea5e9"
              fill="#0ea5e9"
              strokeWidth="0px"
              viewBox="0 0 256 256"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M224,64V176a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z"
                opacity="0.2"
              ></path>
              <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z"></path>
            </svg>
          </button>
          <button>
            <Link to="https://github.com/Liyana-M-T/ReactShop">
              <FaGithub className="header-FaGithub" />
            </Link>
          </button>
        </div>
      </div>
      <hr className="header-line" />
      {showThemeSwitcher && <ThemeSwitcher />}
      
    
    </div>
  );
};

export default Header;
