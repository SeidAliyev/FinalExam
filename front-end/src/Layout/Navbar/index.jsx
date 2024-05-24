import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='mynav myContainer'>
        <h1>FOUNDATION</h1>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/favorite"}>Favorite</Link>
          <Link to={"/basket"}>Basket</Link>
          <li>qfwqefew</li>
          <li>\weffqdqw</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar