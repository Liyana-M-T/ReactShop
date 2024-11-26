import React,{useState,useEffect} from 'react';
import './Signup.css'
import {faCheck,faTimes,faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signup_url } from '../../Urls';


const Signup = () => {

const EMAIL_REGEX=/^[a-zA-Z][a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX=/^.{8,24}$/;
const AVATAR_URL_REGEX = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/.*)?$/;


const navigate=useNavigate();

const [name,setName]=useState('');

const [email,setEmail]=useState('');
const[validEmail,setValidEmail]=useState(false);
const [emailFocus, setEmailFocus] = useState(false);

  
const[password,setPassword]=useState('');
const[validPassword,setValidPassword]=useState(false);
const [PasswordFocus, setPasswordFocus] = useState(false);

const[avatar,setAvatar]=useState('');
const [validAvatar,setValidAvatar]=useState(false)




  useEffect(()=>{
   const result = EMAIL_REGEX.test(email);
   setValidEmail(result)
   
  },[email])

  useEffect(()=>{
    const pwd=PWD_REGEX.test(password);
    setValidPassword(pwd)
  },[password])

  useEffect(()=>{
    const avatar_url=AVATAR_URL_REGEX.test(avatar);
    setValidAvatar(avatar_url)
  },[avatar])

  const handleSignup = async (e) => {
    e.preventDefault();
    const formdata={
  "name":name,
  "email": email,
  "password": password,
  "avatar" :avatar
 
    }
    try {
      const response = await axios.post(
        signup_url,formdata
      );
      console.log(response,"11");
      if (response.status === 201) {

      navigate('/login');
      
      } 
    } catch (err) {
      alert('An error occurred during signup.');
    }
  };

  return (
    
    <div className='Sigup-form'> 
      <form action="Signup" onSubmit={handleSignup}  >
      <h4>SignUp</h4>
    
      <label htmlFor='Name'>Name</label>
      <input id='Name' type='text' onChange={(e)=>setName(e.target.value)}/>
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

          <label htmlFor='avatar'>Avatar</label>
          <input type='text' onChange={(e)=>setAvatar(e.target.value)}></input>
          
    
     


       <div className='btns'>
        <button  className='login-btn' onClick={()=>navigate('/login')} >Login</button>
        <button type='submit' className='sign-btn' >Sign Up</button>
        </div>
      </form>
    </div>
   
  )
}

export default Signup
