import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menu,setMenu] = useState("shop")
  return (
    <div>
        <div className="Navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>Shopping</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => (setMenu('shop'))}><Link to='/' style={{textDecoration: 'none', color: 'black'}}>SHOP</Link> {menu === "shop"? <hr/>:<></>}</li>
                <li onClick={() => (setMenu("mans"))}><Link to='/mens' style={{textDecoration: 'none', color: 'black'}}>MAN</Link> {menu === "mans"? <hr/>:<></>}</li>
                <li onClick={() => (setMenu("womens"))}><Link to='/womens' style={{textDecoration: 'none', color: 'black'}}>WOMEN</Link> {menu === "womens"? <hr/>:<></>}</li>
                <li onClick={() => (setMenu("kids"))}><Link to='/kids' style={{textDecoration: 'none', color: 'black'}}>KIDS</Link> {menu === "kids"? <hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/Login"><button>Login</button></Link>
                <Link to="/Cart"><img src={cart_icon} alt="cart icon" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>

    </div>
  )
}
export default Navbar