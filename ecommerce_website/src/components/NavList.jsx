import React from 'react'
import "../stylings/navList.css"
import { NavLink } from 'react-router'


const navList = () => {
  return (
    <ul className='navList'>
            <li className="navList_items" id="navList_home">
              <NavLink to="/home">Home</NavLink>
              </li>
            <li className="navList_items" id="navList_store">
            <NavLink to="/">store</NavLink>

            </li>
            <li className="navList_items" id="navList_about">
            <NavLink to="/about">about</NavLink>

            </li>
        </ul>
  )
}

export default navList