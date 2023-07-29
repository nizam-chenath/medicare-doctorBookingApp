import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import "../../styles/Footer.scss"
import logo from "../../assets/images/logo.png"


const Footer = () => {
    
    const instaClick = () =>{
        window.location.href = "https://instagram.com/__nizam________";
    }
    const linkedinClick = () =>{
        window.location.href ="https://www.linkedin.com/in/nizamudheen-c-5971b7216/"
    }
    const gitClick = () =>{
        window.location.href ="https://github.com/nizam-chenath"
    }
    const watsClick = () =>{
        window.location.href ="https://whatsapp.com"
    }
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
                <div className="links" onClick={instaClick}>
                <FaInstagram/>
               
                </div>
                <div className="links" onClick={linkedinClick}>

                <FaLinkedin/>
                
                </div>
                <div className="links" onClick={gitClick}>
                <FaGithub/>
                </div><div className="links" onClick={watsClick}>
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