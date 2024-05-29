import React from 'react'
import './Section.css'
import section from './Section.img/Section.png'
import Button from '../Button/Button'
import Phone from '../Phone/Phone'
const Section = () => {
  return (
    <>
      <div className="sectionContainer">
      <div className="section">
        <img src={section} alt="" width={'500px'} />
        <div className="sectionBox">
            <h2 className="sectionTitle">Covid-19 sanitization</h2>
            <h1 className="sectionSublink">We follow guidelines to keep you safe from the COVID-19 virus</h1>
            <p className="sectionText">Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
            <div className="sectioncha">
                <Button/>
                <Phone/>
            </div>
        </div>
      </div>
      </div>
      <hr  className='hr'/>
    </>
  )
}

export default Section
