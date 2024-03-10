import React from 'react'
import "./ad.css"
import Ind from "../../assets/Add.jpg"

const Ad = () => {
  return (
    <div className='ad'>
      <div class="container ad-main">
            <div class="ad-text">
                <h3>indonesian culture</h3>
                <h2>Our culture here is very friendly to people</h2>
                <p>known for his politeness, manners and gentleness. This becomes a characteristic when they mingle with other tribes and become basic traits that are passed down by their ancestors.</p>
                <a href="#">read more</a>
            </div>
            <div class="ad-img">
                <img src={Ind}alt="" />
            </div>
        </div>
    </div>
  )
}

export default Ad
