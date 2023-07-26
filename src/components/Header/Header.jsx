import React, { useState } from 'react'
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.jpeg"
import { Link, NavLink} from "react-router-dom"
import '../../styles/Header.scss'
import { FaBars, FaCross } from 'react-icons/fa'; // Import the Font Awesome hamburger icon


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
        path: "/contact",
        display: "Contact"
    }
]

const Header = () => {

    const [activeNav, setActiveNav] = useState(0)

    const handleNavClick = (index) =>{
        setActiveNav(index)
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
                         {navLinks.map((item, i) => <li key={i} className={activeNav === i ? 'active' : ''} onClick={() => handleNavClick(i)} style={{color: "black"}}>
                                <NavLink to={item.path} > {item.display}</NavLink>
                            </li>
                            )}
                    </ul>
                </div>
                <div className="profile">
                    <Link to="/">

                    <img src={profile} alt="profile" />
                    </Link>
                </div>
                <div className="login-btn">
                    <Link to="/login">

                    <button>Login</button>
                    </Link>
                </div>
                <div className="hamburger" onClick={toggleMobileNav}>
                    {isMobileNavOpen ? <FaCross /> : <FaBars/>}
                
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header