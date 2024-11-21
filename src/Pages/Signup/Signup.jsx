import React,{useState,useEffect} from 'react';
import './Signup.css'
import {faCheck,faTimes,faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Signup = () => {

const EMAIL_REGEX=/^[a-zA-Z][a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX=/^.{8,24}$/;
const SIGNUP_URL='/'

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

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        SIGNUP_URL,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (response.data.success) {
        navigate('/');
      } else {
        alert('Signup failed. Try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during signup.');
    }
  };

  return (
    <div>
    <div className='Sigup-form'> 
      <form action="Signup" onSubmit={ handleSignup}  >
      <h4>SignUp</h4>
      
      <div className='input-section'>
      <label htmlFor='Firstname'>First Name</label>
      <input id='Firstname' type='text'/>
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
        {PasswordFocus && email && !validEmail &&( 
          <p className='validation-msg'>
            <FontAwesomeIcon icon={faInfoCircle}/>
            Invalid Email address
          </p>
          )}
          
          </div>
          
          
          <label htmlFor='Lastname'>Last Name</label>
      <input id='Lastname' type='text'/>
        
        <label htmlFor='password'>Password</label>
        <input id='password' type='password'
        onChange={(e)=>setPassword(e.target.value)}
        required
          onFocus={()=>setPasswordFocus(true)}
          onBlur={()=>setPasswordFocus(false)}
          />
          {PasswordFocus && password && !validPassword&&(
            <p>*Must be 8 characters or more</p>
          )}
      </div>
       
       <div className='btns'>
        <button  className='login-btn' onClick={()=>navigate('/login')} >Login</button>
        <button  className='sign-btn' onClick={()=>navigate('/login')} >Sign Up</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Signup
