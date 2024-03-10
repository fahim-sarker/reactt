import React from 'react'
import "./footer.css"
import Log from"../../assets/logo.png"

const Footer = () => {
  return (
    <footer>
        <div class="container">
            <div class="footer-logo">
                <div class="footer-logo-left">
                 <img src={Log} alt="" />
                </div>
                <div class="footer-logo-right">
                    <span>Ready to explore?</span>
                    <a href="#">get started</a>
                </div>
            </div>
            <div class="footer-service">
                <div class="footer-service-1">
                    <h3>Let's go on vacation, Make your day</h3>
                    <h6>terms & condition</h6>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div class="footer-service-2">
                        <h5>service</h5>
                        <ul>
                        <li><a href="#">email marketing</a></li>
                        <li><a href="#">compaings</a></li>
                        <li><a href="#">branding</a></li>
                        <li><a href="#">offline</a></li>
                 </ul>
                </div>
                <div class="footer-service-3">
                        <h5>about</h5>
                        <ul>
                        <li><a href="#">our story</a></li>
                        <li><a href="#">benefit</a></li>
                        <li><a href="#">terms</a></li>
                        <li><a href="#">career</a></li>
                    </ul>
                </div>
                <div class="footer-service-4">
                    <ul>
                        <li><a href="#">faq's </a></li>
                        <li><a href="#">contact us</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-copyright">
                <h6>copyright 2023 qwery</h6>
            </div>
            </div>
    </footer>
  )
}

export default Footer
