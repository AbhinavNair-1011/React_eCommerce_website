import React from 'react'
import "../stylings/navList.css"

const navList = () => {
  return (
    <ul className='navList'>
            <li className="navList_items" id="navList_home">Home</li>
            <li className="navList_items" id="navList_store">Store</li>
            <li className="navList_items" id="navList_about">About</li>
        </ul>
  )
}

export default navList