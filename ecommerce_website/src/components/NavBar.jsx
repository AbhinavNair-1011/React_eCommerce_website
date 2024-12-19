import React, { useContext } from 'react'
import NavList from "../components/NavList"
import "../stylings/navBar.css"
import CartButton from './CartButton'
import cartContext from '../context/cartContext'
const NavBar = () => {
  let cartCtx=useContext(cartContext)
  return (
    <nav className='navBar'>
     <NavList/>
     <CartButton cartHandler={cartCtx.cartHandler}/>
    </nav>
  )
}

export default NavBar