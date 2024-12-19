import React from 'react'
import NavList from "../components/NavList"
import "../stylings/navBar.css"
import CartButton from './CartButton'

const NavBar = (props) => {
  return (
    <nav className='navBar'>
     <NavList/>
     <CartButton cartHandler={props.cartHandler}/>
    </nav>
  )
}

export default NavBar