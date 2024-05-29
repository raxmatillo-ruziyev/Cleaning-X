import React from 'react'
import './Footer.css'
import footer from './Footer.img/footer.png'
import logo from './Footer.img/logo.png'
const Footer = () => {
  return (
    <>
        <div className="footer">
            <ul className="footerList">
                <li className="footerItem">
                    <h1 className="footerTitle">Quality cleaning for your home</h1>
                    <p className="footerText">Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
                    <div className='footerBox'>
                        <img src={footer} alt="" />
                        <img src={footer} alt="" />
                        <img src={footer} alt="" />
                        <img src={footer} alt="" />
                        <img src={footer} alt="" />
                    </div>
                </li>
                <li className="footerItem">
                    <h2 className="footerSubtitle">Contact us</h2>
                    <p className="footerText">
                    
1827 Nickel Road, Los Angeles, <br /> CA, 90017, United States <br />

(414) 567 - 2109 <br />

contact@cleaning.com
                    </p>
                </li>
                <li className="footerItem">
                    <h2 className="footerSubtitle">Hours</h2>
                    <h2 className="footerSubtitle">Monday to Friday</h2>
                    <p className="footerText">6:00 AM - 9:00 PM</p>
                    <h2 className="footerSubtitle">Saturday & Sunday</h2>
                    <p className="footerText">8:00 AM - 8:00 PM</p>
                </li>
                <li className="footerItem">
                <h2 className="footerSubtitle">Get a free estimate</h2>
                <a href="tel:(414) 567 - 2109" className="footerLink">(414) 567 - 2109</a>
                <p className="footerText">Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
                <button className='footerBtn'> Request a free quote</button>
                </li>
            </ul>
            <hr  className='footerHr'/>
            <div className="footerWrap">
                
            <img className='navbarImg' src={logo} alt="" />
            <p className="footerSubText">Copyright © Cleaning X | Designed by
  <span>BRIX Templates</span>
- Powered by
<span>Webflow
-
Licenses</span></p>
            </div>
        </div>
    </>
  )
}

export default Footer
