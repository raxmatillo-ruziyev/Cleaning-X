import React from 'react'
import './Service.css'
import Button from '../Button/Button'
import service1 from './Service.img/service1.png'
import service2 from './Service.img/service2.png'
import service3 from './Service.img/service3.png'
const Service = () => {
  return (
    <>
      <div className="service">
        <div className="serviceBox">
            <h1 className="serviceTitle">Articles & resources</h1>
            <ul className='boxList'>
                <li>      <Button/>
          </li>
          <li>  <button className='serviceBtn'>Browse articles</button></li>
            </ul>
      
        </div>
        <ul className="serviceList">
            <li className="serviceItem">
                <img src={service1} alt="" width={"530px"} />
                <div className="serviccha">
                    <h2 className="serviceSubtitle">8 best vacuum cleaners to clean any mess for your home in 2022</h2>
                    <p className="serviceText">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                    <ul className="servicchaList">
                        <li><h3 className="servicchaTitle">Jan 28, 2022</h3></li>
                        <li><img src={service3} alt="" /></li>
                    </ul>
                </div>
            </li>
            <li className="serviceItem">
                <img src={service2} alt=""  width={"530px"}/>
                <div className="serviccha">
                    <h2 className="serviceSubtitle">8 best vacuum cleaners to clean any mess for your home in 2022</h2>
                    <p className="serviceText">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                    <ul className="servicchaList">
                        <li><h3 className="servicchaTitle">Jan 28, 2022</h3></li>
                        <li><img src={service3} alt="" /></li>
                    </ul>
                </div>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Service
