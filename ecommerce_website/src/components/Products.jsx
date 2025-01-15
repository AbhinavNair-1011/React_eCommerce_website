import React, { useContext, useEffect,useState } from "react";
import "../stylings/products.css";
import productsList from "../assets/data.json";
import cartContext from "../context/cartContext";
import { Navigate, useNavigate } from "react-router";


const Products = ({props}) => {
  const navigate= useNavigate()

const {cartHandler,cart,dispatch}=useContext(cartContext)
const [list,setList]=useState([])
const[isLoading,setIsLoading]=useState(true)


async function fetchProducts(){
 const jsonData= await fetch("https://fakestoreapi.com/products") 
 const data= await jsonData.json()
 return data;
 }

 useEffect(()=>{
  (async () =>{
      const temp = await fetchProducts();
      let done=temp.map(item=>({...item,quantity:1}))
      setIsLoading(false)
      setList(done) 
  })()

 },[])




const addHandler=(item)=>{
  dispatch({type:"add",payload:item})
dispatch({type:"totalPrice"})
}
const test =(obj)=>{
props.setItem(obj)
navigate(`/store/${obj.title}`)

}
  let products = productsList.map((item, index) => (
    <li className="product_wrapper" key={index} onClick={()=>(test(item))}>
      <h1 className="product_title" key={index}>
        {item.title}
      </h1>

      <h2 className="product_price">Price : {item.price} rs</h2>
      <img className="product_image" src={item.imageUrl} alt="" />
      <button className="addToCart" onClick={()=>{addHandler(item)}}>Add to cart</button>
    </li>
  ));


  let d = list.map((item, index) => (

    <li className="product_wrapper2" key={index} onClick={()=>(test(item))}>
      <h1 className="product_title2" key={index}>
        {item.title}
      </h1>

      <h2 className="product_price2">Price : {item.price} rs</h2>
      <img className="product_image2" src={item.image} alt="" />
    
      <button className="addToCart" onClick={()=>{addHandler(item)}}>Add to cart</button>
    </li>
    
  ));


  
  return <>
  <h3  className="theme_heading">The Generic Themes</h3>
  <ul className="productsList">{products}</ul>
  <h3  className="theme_heading">Products</h3>
  <ul className="productsList2">{isLoading  ? "loading...": d}</ul>

  
  </>;
};

export default Products;
