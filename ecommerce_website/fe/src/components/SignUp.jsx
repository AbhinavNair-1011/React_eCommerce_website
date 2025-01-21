import React, { useEffect, useState } from "react";
import "../stylings/signUp.css";
import { NavLink, useNavigate } from "react-router";
const SignUp = () => {

const navigate=useNavigate()

  const [formData, setFormData] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  useEffect(()=>{
      sessionStorage.removeItem("registered")
      sessionStorage.removeItem("email")

  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {userName,phoneNumber,password,email}=formData;
    if((userName && phoneNumber && password && email)!=="" ){
      (async()=>{
          try{
              let responce = await fetch("http://localhost:4000/api/user-signUp",{
                method:"POST",
                headers: {
                  "Content-Type": "application/json"
              },
                body:JSON.stringify(formData)
              });
              let result=await responce.json()

              if(result.redirect){
                sessionStorage.setItem("registered",true);
                sessionStorage.setItem("email",formData.email)
                navigate("/login")
              }else{
                throw new Error(result)
              }

          }catch(err){
              console.log(err)

          }
      })()

    }

  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create an Account</h2>

        <div className="form-group">
          <label htmlFor="userName">userName</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Enter your userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>

        <p className="login-link">
          Already have an account?  <NavLink to="/login">Login</NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
