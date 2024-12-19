import React, { useContext } from 'react'
import "../stylings/cartButton.css"
import cartContext from '../context/cartContext'

const CartButton = (props) => {
  const cartctx=useContext(cartContext)
  return (
    <button onClick={cartctx.cartHandler}className="navBar_cartButton">Cart</button>
  )
}

export default CartButton