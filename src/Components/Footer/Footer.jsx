import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import {FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-section'>
      {/* <hr/>
      
      <div className="footer-container">
      <div className="">
        <Link className='link'>Terms</Link>{" "}
        ·{" "}
        <Link className='link'>Privacy Policy</Link>
        </div>
        <div className="footer-terms-container">
       <div className="footer-terms">
        <h6>Products</h6>
        <li className='list'> Web Studio</li>
        <li className='list'>  DynamicBox Flex</li>
        <li className='list'>  Programming Forms</li>
        <li className='list'> Integrations</li>
        <li className='list'> Command-line</li>
        
       </div>
       <div className="footer-terms">
       <h6>Resources</h6>
        <li>  Documentation</li>
        <li>  Tutorials & Guides</li>
        <li>    Blog</li>
        <li>   Support Center</li>
        <li>  Partners</li>

       </div>
       <div className="footer-terms">
       <h6>Company</h6>
        <li>  Home</li>
        <li>  About us</li>
        <li> Company values</li>
        <li>   Pricing</li>
        <li>  Privacy Policy</li>
       </div>
      
       <div className="footer-terms">
       <h6>Subscribe</h6>
        <p>  Get the latest news and articles to your inbox every month.</p>
        <div className="text-box">
       <input type='text' placeholder='Your email'/>
       <hr />
       <button type='submit'>
       <svg class="arrowsvg"
        viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill-rule="nonzero"></path></svg>
       </button>
       </div>
       </div>
       </div>
      </div> */}
      <hr/>
      <div className="footer-bottom-section">
      <div className="bottom-left">
      Made with <span>♥</span> by{" "}
      <a href='https://github.com/Liyana-M-T'>Liyana</a>
      </div>
      <div className="bottom-right">
       <Link to='https://github.com/Liyana-M-T'><FaGithub className='FaGithub'/></Link>
      </div>
      </div>
    </div>
  )
}

export default Footer
