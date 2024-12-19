import React ,{useState} from 'react'
import NavBar from './components/NavBar'
import products from "./assets/data.json"

import CartButton from './components/CartButton'
import "./app.css"
import StorePage from './components/StorePage'
import CartPage from './components/CartPage'

const App = () => {

  const [cartOpenStatus,setCartOpenStatus]=useState(false)

  const cartHandler= (e)=>{
    e.preventDefault();
   
 setCartOpenStatus((prev)=>(!prev))
  }

  return (
    <>
    <NavBar cartHandler={cartHandler}/>
    {cartOpenStatus == true ? <CartPage cartHandler={cartHandler} />:<StorePage products={products}/>}



    </>
  )
}

export default App