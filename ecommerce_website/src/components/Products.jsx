import React, { useContext } from "react";
import "../stylings/products.css";
import productsList from "../assets/data.json";
import cartContext from "../context/cartContext";


const Products = () => {
const {cartHandler,cart,dispatch}=useContext(cartContext)

const addHandler=(item)=>{
  dispatch({type:"add",payload:item})
dispatch({type:"totalPrice"})
}

  let products = productsList.map((item, index) => (
    <li className="product_wrapper" key={index}>
      <h1 className="product_title" key={index}>
        {item.title}
      </h1>

      <h2 className="product_price">Price : {item.price} rs</h2>
      <img className="product_image" src={item.imageUrl} alt="" />
      <button onClick={()=>{addHandler(item)}}>Add to cart</button>
    </li>
  ));

  return <ul className="productsList">{products}</ul>;
};

export default Products;
