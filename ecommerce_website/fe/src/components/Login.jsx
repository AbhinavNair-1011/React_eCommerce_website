import React, { useEffect, useState } from 'react';
import "../stylings/login.css"
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router';

const Login = () => {

  const navigate=useNavigate()
  
const location= useLocation()
const loggedInlayoutMessage=<p className='loggedInlayoutMessage'>{location.state?.message}</p>


const query=  new URLSearchParams(location.search)

const [formData,setFormData]=useState({
  email:"",password:""
})
const [PasswordCheck,setPasswordCheck]=useState(false)


const changerHandler=(e)=>{
  const name=e.target.name
  const value=e.target.value
setFormData({
  ...formData,
  [name]:value
})
}

const submitHandler=async (e)=>{
  e.preventDefault();
  setPasswordCheck(false)
  try{
   const response= await fetch("http://localhost:4000/api/user-login",{
      method:"post",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(formData),
    })
   const result= await response.json()

   if(!response.ok){
    throw new Error(result.code)
   }else{
    localStorage.setItem("token",result.token)
      
      navigate("/uv/home")
   
    
  }



  }catch(err){
if(err.message==0){
  setPasswordCheck(true)
  }
  }
}

  const registered=sessionStorage.getItem("registered")
  const email=sessionStorage.getItem("email")
  
useEffect(()=>{

if(email){
    setFormData({
      ...formData,
       email:email
    })
  }
 


},[])

  
  const signedUpMessage=<p className="registered">User Registered, please login to continue</p>
  const passwordCheckMessage=<p className='passwordCheckMessage'>*Incorrect Password</p>
  let token=localStorage.getItem("token")
  return (
    <>
   
    {registered && signedUpMessage}
  
    {!token && loggedInlayoutMessage}
      <div className="login-container">
        <form className="login-form" 
        onSubmit={submitHandler}>
          <h2>Login</h2>
          <div className="form-group1">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required 
              value={formData.email}
              onChange={changerHandler}
              />
          </div>
          <div className="form-group1">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required 
            value={formData.password}
            onChange={changerHandler}
            />
            {PasswordCheck && passwordCheckMessage}
          </div>
          <button type="submit" className="submit-btn1"
          
         
          >Login</button>
          <div className="signup-link">
            <p>Don't have an account? <NavLink to="/">Sign up</NavLink></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
