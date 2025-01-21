import React, { useContext } from 'react'
import { useOutletContext, useParams } from 'react-router'
import cartContext from "../context/cartContext";


const ProductPage = () => {

  
  const {cartHandler,cart,dispatch}=useContext(cartContext)
  const addHandler=(item)=>{
    dispatch({type:"add",payload:item})
  dispatch({type:"totalPrice"})
  }

  const item=useOutletContext()
   const {title}= useParams()
   let i=0;
  return <>
<ul>
<li className="product_wrapper" key={i++}>
      <h1 className="product_title" >
        {item.title}
      </h1>

      <h2 className="product_price">Price : {item.price} rs</h2>
      <img className="product_image" src={item.imageUrl || item.image} alt="" />
      <button className="addToCart" onClick={()=>{addHandler(item)}}>Add to cart</button>
    </li>
</ul>
<div>
    <h3>
      Specification - Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, rem laborum. Vel rem magni nesciunt expedita. 
      Iure delectus omnis, dolorem, explicabo consectetur sint labore adipisci suscipit repellat rem placeat ad.
    </h3>
  <h5>Reviews - Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione quos sit corrupti velit, 
    odio, exercitationem expedita neque molestiae facilis culpa fugit animi nemo a vero minima eius, voluptatum minus!</h5>
    <h3>Reasons to buy - Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, debitis dolorem cum vel enim doloremque consequatur c
      onsectetur consequuntur vero, cumque quas velit aliquid impedit tempora maiores natus maxime, praesentium rem.</h3>
</div>
</>
}

export default ProductPage