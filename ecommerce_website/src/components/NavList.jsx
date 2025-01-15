import React from 'react'
import "../stylings/navList.css"
import { NavLink } from 'react-router'


const navList = () => {
  return (
    <ul className='navList'>
            <li className="navList_items" id="navList_home">
              <NavLink to="/">Home</NavLink>
              </li>
            <li className="navList_items" id="navList_store">
            <NavLink to="/store">store</NavLink>

            </li>
            <li className="navList_items" id="navList_about">
            <NavLink to="/about">about</NavLink>

            </li>
            <li className="navList_items" id="navList_about">
            <NavLink to="/contactUs">Contact Us</NavLink>

            </li>
        </ul>
  )
}

export default navList