import React, { useState } from 'react'
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.jpeg"
import { Link, NavLink} from "react-router-dom"
import '../../styles/Header.scss'

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
  return (
    <header>
        <div className="container">
            <div className="nav-container">
                <div className="logo-img">
                    <img src={logo} alt="" width={100}/>
                </div>
                <div className="navigation">
                    <ul className="nav-items">
                         {navLinks.map((item, i) => <li key={i} className={activeNav === i ? 'active' : ''} onClick={() => handleNavClick(i)} style={{color: "black"}}>
                                <NavLink to={item.path} > {item.display}</NavLink>
                            </li>
                            )}
                    </ul>
                </div>
                <div className="profile">
                    <img src={profile} alt="profile" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header