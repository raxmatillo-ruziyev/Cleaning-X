import React from 'react'
import './Contact.css'
import Phone from '../Phone/Phone'
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contactLeft">
            <h1 className="contactLeftTitle">Contact Us</h1>
            <p className="contactLeftText">In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
            <Phone/>
            <hr className='contactLeftHr' />
            <h2 className="contactLeftSubtitle">Not convinced yet?</h2>
            <p className="contactLeftSubtext">Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
            <button className='contactLeftBtn'>Browse our packages</button>
        </div>
        <div className="contactRight">
            <ul className="contactList">
                <li className="contactItem">
                    Full name <br />
                    <input type="text" /><br />
                    Adress <br />
                    <input type="text" /><br />
                    Requested service <br />
                    <input type="text" />
                </li>
                <li className="contactItem">
                    Phone number <br />
                    <input type="number" /> <br />
                    Email <br />
                    <input type="email" /><br />
                    Day of service <br />
                    <input type="text" />
                </li>
            </ul>
            <h2 className="contactTitle">Add a note</h2> <br />
            <input className='input' type="text" /> <br />
            <button className='contactBtn'>Submit message</button>
        </div>
      </div>
    </>
  )
}

export default Contact
