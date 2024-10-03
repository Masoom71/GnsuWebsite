import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';



const Navbar = () => {

  
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const[mobileMenu, stMobileMenu] =useState(false);
  const toggelMenu = () => {
    mobileMenu? stMobileMenu(false) : stMobileMenu(true);
  }

  useGSAP(() => {
    gsap.from("nav li",{
      y:-70,
      duration:0.5,
      delay:0.2,
      opacity:0,
      stagger:0.2
    })
    gsap.from(".logo",{
      y:-500,
      duration:0.5,
      delay:0.3,
      opacity:0,
    })
    
  })

  return (
    <nav className={`container  ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li><Link to='hero' smooth={true} duration={500} offset={0}>Home</Link></li>
        <li><Link to='program' smooth={true} duration={500} offset={-260}>Program</Link></li>
        <li><Link to='about' smooth={true} duration={500} offset={-150}>About us</Link></li>
        <li><Link to='campus' smooth={true} duration={500} offset={-230}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} duration={500} offset={-250}>Testimonial</Link></li>
        <li><Link className='btn' to='contact' smooth={true} duration={500} offset={-250}>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon'
      onClick={toggelMenu} />
    </nav>
  )
}

export default Navbar