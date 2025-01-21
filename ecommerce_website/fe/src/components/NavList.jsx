import React from 'react'
import "../stylings/navList.css"
import { NavLink } from 'react-router'


const navList = () => {
  return (
    <ul className='navList'>
            <li className="navList_items" id="navList_home">
              <NavLink to="/uv/home">Home</NavLink>
              </li>
            <li className="navList_items" id="navList_store">
            <NavLink to="/uv/store">store</NavLink>

            </li>
            <li className="navList_items" id="navList_about">
            <NavLink to="/uv/about">about</NavLink>

            </li>
            <li className="navList_items" id="navList_about">
            <NavLink to="/uv/contactUs">Contact Us</NavLink>

            </li>
        </ul>
  )
}

export default navList