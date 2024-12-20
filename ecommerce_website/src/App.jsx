import React ,{useReducer, useState} from 'react'
import NavBar from './components/NavBar'

import "./app.css"
import cartContext from './context/cartContext'

import StorePage from './components/StorePage'
import CartPage from './components/CartPage'
import About from "./components/About"
import Home from "./components/Home"

import {BrowserRouter, Routes,Route} from "react-router-dom"

const App = () => {
  
  const cartReducer = (state,action)=>{
    
    if(action.type==="add"){

      let newItem= action.payload;
   
      if (state.cartItems.some(item=>item.title===newItem.title)){
        
      let array= state.cartItems.map(item=>{
          if(item.title===newItem.title){
            return {...item,quantity:item.quantity+1}
          }else {
            return item
          }
        })
        return {...state,cartItems:[...array]}
     
        
      }
      return {...state,cartItems:[...state.cartItems,newItem]}
    }

    if(action.type==="delete"){
      let deleteItem=action.payload
      
      if(deleteItem.quantity>1){
        
        let array= state.cartItems.map(item=>{
         if(item.title===deleteItem.title){
          return {...item,quantity:item.quantity-1}
         }
        return item
      })
      return {...state,cartItems:[...array]}
      }
        let array =state.cartItems.filter((item)=>(item !== action.payload))
        return{...state,cartItems:[...array]}
    }
    
    if(action.type==="totalPrice"){
      let totalPrice=0
     state.cartItems.map(item=>{
        totalPrice=totalPrice+(item.price *item.quantity)
      })
      return {...state,total:totalPrice}


    }
  }

  const [cartOpenStatus,setCartOpenStatus]=useState(false)
  const [cart,dispatch]=useReducer(cartReducer,{cartItems:[],total:0})

  const cartHandler= (e)=>{
    e.preventDefault();
   
 setCartOpenStatus((prev)=>(!prev))
  }

  return (
    <cartContext.Provider value={{cartHandler,cart,dispatch}}>
      <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/store" element={<StorePage/>}/>

      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
    </BrowserRouter>
    </cartContext.Provider>


  )
}

export default App