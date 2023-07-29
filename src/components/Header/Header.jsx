import React, { useState } from 'react'
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.jpeg"
import { Link, NavLink} from "react-router-dom"
import '../../styles/Header.scss'
import { FaBars, } from 'react-icons/fa'; // Import the Font Awesome hamburger icon
import {RxCrossCircled} from 'react-icons/rx'

const navLinks = [
    {
        path: "/home",
        display: "Home"
    },
    {
        path: "/doctors",
        display: "Find a Doctor"
    },
    {
        path: "/services",
        display: "Services"
    },
    {
        path: "/faq",
        display: "Faq"
    }
]

const Header = () => {

    const [activeNav, setActiveNav] = useState(0)

    const handleNavClick = (index) =>{
        setActiveNav(index)
        setMobileNavOpen(false)
    }
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <header>
        <div className="container">
            <div className="nav-container">
                <div className="logo-img">
                    <img src={logo} alt="" width={100}/>
                </div>
                <div className={`navigation ${isMobileNavOpen ? 'active' : ''}`}>
                <ul className={`nav-items ${isMobileNavOpen ? 'active' : ''}`}>
                         {navLinks.map((item, i) => <li key={i} className={activeNav === i ? 'active' : ''} >
                                <NavLink to={item.path} onClick={() => handleNavClick(i)} style={{color: "black"}}> {item.display}</NavLink>
                            </li>
                            )}
                    </ul>
                </div>
                <div className="profile">
                    <Link to="/">

                    <img src={profile} alt="profile" />
                    </Link>
                </div>
              
                <div className="hamburger" onClick={toggleMobileNav}>
                    {isMobileNavOpen ? <RxCrossCircled/> : <FaBars/>}
                
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header