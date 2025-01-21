import React, { useContext } from 'react'
import "../stylings/cartButton.css"
import cartContext from '../context/cartContext'
import { NavLink } from 'react-router'


const CartButton = (props) => {
  const cartctx=useContext(cartContext)
  return (
    <button onClick={cartctx.cartHandler}className="navBar_cartButton">
      <NavLink to="/uv/cart">Cart</NavLink></button>
  )
}

export default CartButton