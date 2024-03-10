import React from 'react'
import "./about.css"
import Ban from "../../assets/banner3.png"

const About = () => {
  return (
    <div className='about'>
      <div class="container about-main">
            <div class="about-image">
               <img src={Ban} alt="" />    
            </div>
            <div class="about-text">
             <h5>wast nusa tengarra</h5>
             <h3>have you enjoyed your holiday</h3>
              <p>You will be amazed if you take part in this 
               sailing Komodo island tour package. 
               So it is also mandatory for you, 
               besides enjoying Komodo tourism on Komodo Island,
               you also have to taste the marine tourism.  The beautiful waterof Komodo will make you meet many travelers from other countri</p>
            <a href="#">read more</a>
        </div>
      </div>
    </div>
  )
}

export default About
