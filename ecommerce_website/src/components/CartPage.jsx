import React from 'react'
import products from "../assets/data.json"
import "../stylings/cartPage.css"

const CartPage = (props) => {
    let product= products.map((item,index)=>(
        <tr key={index} className="table_body_items_row">
            <td className="table_body_items"  id="testing"> <img src={item.imageUrl} alt="" /> {item.title}</td>

            <td  className="table_body_items"> {item.price}</td>

            <td  className="table_body_items"> {item.quantity}  
                <button className='cart-delete-button'>-</button>
            <button className='cart-add-button'>+</button>
          
                        </td>
           
        </tr>
    ))

  return (
    <div className='table_wrapper'>
        <table className='table'>
            <thead>
            <tr className="table_head">
                <th className="table_head_items">ITEM</th>
                <th className="table_head_items">PRICE</th>
                <th className="table_head_items">QUANTITY</th>
            </tr>
            </thead>
            <tbody className='table_body'>
           {product}
            </tbody>
        </table>
        <button className="cartClose" onClick={props.cartHandler}> X</button>

    </div>
  )
}

export default CartPage