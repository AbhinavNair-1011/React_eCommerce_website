import React, { useContext } from "react";
import products from "../assets/data.json";
import "../stylings/cartPage.css";
import cartContext from "../context/cartContext";

const CartPage = () => {
  const cartCtx = useContext(cartContext);

  const deleteHandler=(item)=>{
    cartCtx.dispatch({type:"delete",payload:item})
  cartCtx.dispatch({type:"totalPrice"})
  }
  const addHandler=(item)=>{
    cartCtx.dispatch({type:"add",payload:item})
  cartCtx.dispatch({type:"totalPrice"})
  }
  
  let cart = cartCtx.cart.cartItems.map((item, index) => (
    <tr key={index} className="table_body_items_row">
      <td className="table_body_items" id="testing">
  
        <img src={item.imageUrl} alt="" /> {item.title}
      </td>

      <td className="table_body_items"> {item.price}</td>

      <td className="table_body_items">
   
        {item.quantity}
        <button className="cart-delete-button" onClick={()=>deleteHandler(item)}>-</button>
        <button className="cart-add-button" onClick={()=>addHandler(item)} >+</button>
      </td>
    </tr>
  ));

  return (
    <div className="table_wrapper">
      <table className="table">
        <thead>
          <tr className="table_head">
            <th className="table_head_items">ITEM</th>
            <th className="table_head_items">PRICE</th>
            <th className="table_head_items">QUANTITY</th>
          </tr>
        </thead>
        <tbody className="table_body">{(cartCtx.cart.total==0) ? <tr style={{
          textAlign:"center",
          fontSize:"25px",
        }}>
           <td>No items selected</td>
        </tr>  :cart  }
        </tbody>

      </table>
      <button className="cartClose" onClick={cartCtx.cartHandler}>
        X
      </button>
        <p>Total Price :{cartCtx.cart.total}</p>
    </div>
  );
};

export default CartPage;
