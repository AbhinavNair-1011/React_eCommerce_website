import React from 'react'
import "../stylings/products.css"

const Products = (props) => {
    console.log(props.products)
    let products = props.products.map((item,index)=>(
     
        <li className="product_wrapper" key={index}>
                  <h1 className="product_title" key={index}> {item.title} </h1>

            <h2 className="product_price">Price : {item.price} rs</h2>
         <img className="product_image" src={item.imageUrl} alt="" />
         </li>
         
    ))
  return (
    <ul className='productsList'>
      {products}
    </ul>
  )
}

export default Products