import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import "../../styles/Footer.scss"
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-right">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="content">
             <p>copyright  © 2023 developed by nizam-chenath all right reserved</p>
            </div>
            <div className="social-links">
                <div className="links">
                <FaInstagram/>
               
                </div>
                <div className="links">

                <FaLinkedin/>
                
                </div>
                <div className="links">
                <FaGithub/>
                </div><div className="links">
                <FaWhatsapp/>
                </div>
            </div>
           
        </div>
        <div className="footer-left">
            <div className="quick-heading">

            </div>
            <div className="quick-links">

            </div>
           

        </div>
    </div>
  )
}

export default Footer