import React from 'react'
import './Services.css'
import Button2 from '../Button2/Button2'
import services1 from './Services.img/services1.png'
import services2 from './Services.img/services2.png'
import services3 from './Services.img/services3.png'
const Services = () => {
  return (
    <>
      <div className="services">
        <div className="servicesBox">
            <h1 className="servicesTitle">Our Services</h1>
            <Button2/>
        </div>
        <ul className="servicesList">
            <li className="servicesItem">
                <img src={services1} alt=""width={"220px"}  height={"220px"}/>
                <h2 className="servicesSubtitle">House cleaning</h2>
                <p className="servicesText">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </li>
            <li className="servicesItem">
                <img src={services2} alt=""width={"220px"}  height={"220px"} />
                <h2 className="servicesSubtitle">Office cleaning</h2>
                <p className="servicesText">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </li>
            <li className="servicesItem">
                <img src={services3} alt=""width={"220px"}  height={"220px"} />
                <h2 className="servicesSubtitle">Industrial cleaning</h2>
                <p className="servicesText">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Services
