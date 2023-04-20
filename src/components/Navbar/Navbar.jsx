import Hamburger from '../Hamburger/Hamburger'
import menu from '../../assets/menu.svg'
import { useState } from 'react'
import './navbar.css'

const Navbar = () => {
    const [show, setShow] = useState(false)    
    
    return ( 
        <nav className='navbar-container'>
            <Hamburger show={show}/>
            <div className='hamburger-menu' onClick={() => setShow(!show)}><img src={menu}/></div>
            <div className='logo'>PAYHUB</div>
            <div className='nav-links'>
                <a href="#">Company&#9660;</a>
                <a href="#">Banking</a>
                <a href="#">Payment&#9660;</a>
                <a href="#">Loans</a>
                <a href="#">Contact Us</a>
                
            </div>
        </nav>
     );
}
 
export default Navbar;