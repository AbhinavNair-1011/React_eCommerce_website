import React from 'react'
import NavBar from './components/NavBar'
import products from "./assets/data.json"

import CartButton from './components/CartButton'
import "./app.css"
import StorePage from './components/StorePage'

const App = () => {


  return (
    <>
    <NavBar/>
    <StorePage products={products}/>

    </>
  )
}

export default App