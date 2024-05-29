import React from 'react'
import './Hero.css'
import Button from '../Button/Button'
import Phone from '../Phone/Phone'
import hero from './Hero.img/Hero.png'
const Hero = () => {
  return (
    < >
    <div className='Hero'>
        <div className="heroBox">
            <h1 className="heroTitle">Quality cleaning for your home</h1>
            <p className="heroText">Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
            <ul className="heroList">
                <li><Button/></li>
                <li><Phone/></li>
            </ul>
        </div>
        <img src={hero} alt="" width={"600px"} />


    </div>
    </ >
  )
}

export default Hero
