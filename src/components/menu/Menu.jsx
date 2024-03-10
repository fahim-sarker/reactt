import React from 'react'
import "./menu.css"
import Logo from "../../assets/logo.png"

const Menu = () => {
  return (
    <div>
      <nav>
      <div class="container">
        <div class="main-nav">
            <div class="logo">
                <img src={Logo} alt="" />
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">information</a></li>
                    <li><a href="#">culture</a></li>
                    <li><a href="#">contact us</a></li>
                </ul>
            </div>
        </div>      
    </div>
    </nav>
    </div>
  )
}

export default Menu
