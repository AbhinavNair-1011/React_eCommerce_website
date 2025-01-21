import React, { useContext, useEffect, useState } from 'react'
import Products from './Products'
import cartContext from '../context/cartContext'
import { Outlet, useLocation, useParams } from 'react-router'


const StorePage = () => {
  const [item,setItem]=useState("")
  const location=useLocation()
  useEffect(() => {
    if (location.pathname === "/store") {
      setItem(""); 
    }
  }, [location]);
  
  
  return (
    <div className="storePage_container">
      {!item?<Products props={{item,setItem}}/> : <Outlet context={item}/>}   
        </div>
  )
}

export default StorePage