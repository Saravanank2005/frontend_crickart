import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
        <span>ㅤ</span>
            <><h1>Exclusive</h1></>
            <h1>Offers For Professionals</h1>
            <p>Avail by Using Promo Codes</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=''/>
        </div>
    </div>
    
  )
}

export default Offers