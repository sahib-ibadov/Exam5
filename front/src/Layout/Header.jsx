import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
function Header() {
  return (
 
    
    <div className='header__all'>
      <div> <img src="https://preview.colorlib.com/theme/wines/images/logo.png" alt="" /></div>
      <div>
      <div className='header__button'>
      <Link to="/" style={{color:"orangered"}}>Home</Link>
      <Link to="/Add">Add</Link>
      <Link to="/Basket">Basket</Link>
      <Link to="/WishList">WishList</Link>
      {/* <Link to="/">home</Link> */}
    </div>
      </div>
    </div>
  
  )
}

export default Header
