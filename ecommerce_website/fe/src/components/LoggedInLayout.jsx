import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Navigate, Outlet, useNavigate } from 'react-router'

const LoggedInLayout = ({children}) => {
  let token=localStorage.getItem("token");
  


  return <>
  {token ? <><NavBar/> <Outlet/></> :<Navigate to="/login"
  state={{message:"Please login to continue"}}
  /> }

  </>
}

export default LoggedInLayout