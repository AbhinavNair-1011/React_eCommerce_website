import React from 'react'
import "../stylings/cartButton.css"

const CartButton = (props) => {
  return (
    <button onClick={props.cartHandler}className="navBar_cartButton">Cart</button>
  )
}

export default CartButton