import React from 'react'
import NavList from "../components/NavList"
import "../stylings/navBar.css"
import CartButton from './CartButton'

const NavBar = () => {
  return (
    <nav className='navBar'>
     <NavList/>
     <CartButton/>
    </nav>
  )
}

export default NavBar