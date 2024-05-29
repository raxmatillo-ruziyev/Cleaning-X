import Button from '../Button/Button'
import './Navbar.css'
import logo from './Navbar.img/logo.png'
function Navbar() {
 

  return (
    <>
    <div className='navbar'>
        <ul className='navbarList'>
            <li className='navbarItem'>
                <img className='navbarImg' src={logo} alt="" />
            </li>
            <li className='navbarNextItem'>
                <a href="" className="navbarLink">Home</a>
                <a href="" className="navbarLink">About</a>
                <a href="" className="navbarLink">Services</a>
                <a href="" className="navbarLink">Articles</a>
                <a href="" className="navbarLink">Contact</a>
           </li>
           <li className="navbarItem">
           <a href="" className="navbarLink">Cart(0)</a>
           <Button/>
         
           </li>
        </ul>
    </div>
    
    </>
  )
}

export default Navbar
