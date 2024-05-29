import React from 'react'
import './Phon.css'
import phone from './Phone.img/Phone.png'
const Phone = () => {
  return (
    <>
     
      <div className="phone">
      <div>
      <img className='phoneImg' src={phone} alt=""  width={"80px"} height={"80px"} />
      </div>
      <div>
        <h1 className="phoneTitle">Call us now</h1>
        <h1 className='PhoneSubtitle' >(414) 567 - 2109</h1>
      </div>
      </div>
    </>
  )
}

export default Phone
