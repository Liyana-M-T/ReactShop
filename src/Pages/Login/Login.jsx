import React,{useState,useEffect,userRef, useRef} from 'react'
import './Login.css'
import {faCheck,faTimes,faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { login_url } from '../../Urls';
import Cookies from 'js-cookie';




const EMAIL_REGEX=/^[a-zA-Z][a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX=/^.{8,24}$/;



const Login = () => {
   
  const navigate=useNavigate();

  const [email,setEmail]=useState('');
  const[validEmail,setValidEmail]=useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  
    
  const[password,setPassword]=useState('');
  const[validPassword,setValidPassword]=useState(false);
  const [PasswordFocus, setPasswordFocus] = useState(false);


    useEffect(()=>{
     const result = EMAIL_REGEX.test(email);
     setValidEmail(result)
     
    },[email])

    useEffect(()=>{
      const pwd=PWD_REGEX.test(password);
      setValidPassword(pwd)
    },[password])

    const handleLogin = async (e) => {
      e.preventDefault();


      const formdata={
        "email": email,
        "password": password
       
          }
      if (!validEmail || !validPassword) {
        alert('Invalid email or password');
        return;
      }
      try {
        const response = await axios.post(
          login_url,
          formdata
        );
     console.log(response.data,'hello');
     
        if (response.status===201) {
          alert('Login successful');
          console.log( Cookies.set("access_token",response.data.refresh_token),"kil");
          
          Cookies.set("access_token",response.data.access_token)
          Cookies.set("refresh_token",response.data.refresh_token)
          navigate('/');
        }

      } catch{
       
        alert('An error occurred during login.');
      }
    };
    
    

  return (
   
    <div className='login-form'> 
      <form action="Login" onSubmit={handleLogin} >
      <h4>Login</h4>
      <div className='email-form'>
      <label htmlFor='email'>Email Address</label>
        <input id='email' type="text" onChange={(e)=>
        setEmail(e.target.value)
        } 
        required
        aria-invalid={validEmail? "false" : "true"}
        onFocus={()=>setEmailFocus(true)}
        onBlur={()=>setEmailFocus(false)}
        />
        {!emailFocus && email && !validEmail &&( 
          <p className='validation-msg'>
            <FontAwesomeIcon icon={faInfoCircle}/>
            Invalid Email address
          </p>
          )}
          
          </div>
        
        <label htmlFor='password'>Password</label>
        <input id='password' type='password'
        onChange={(e)=>setPassword(e.target.value)}
        required
          onFocus={()=>setPasswordFocus(true)}
          onBlur={()=>setPasswordFocus(false)}
          />
          {PasswordFocus && password && !validPassword&&(
            <p className='validation-msg'>*Must be 8 characters or more</p>
          )}
       
       <div className='btns'>
        <button type='submit' className='login-btn' onClick={handleLogin}>Login</button>
        <button  className='sign-btn' onClick={()=>navigate('/Signup')}>Sign Up</button>
        </div>
      </form>
    </div>
  
  )
}

export default Login
