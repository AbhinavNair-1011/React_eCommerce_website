import React, { useContext } from 'react'
import Products from './Products'
import cartContext from '../context/cartContext'

const StorePage = () => {
      
  return (
    <div className="storePage_container">
       <Products/> 
        </div>
  )
}

export default StorePage