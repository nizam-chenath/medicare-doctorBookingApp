import React from 'react'
import featuredoc from "../../assets/images/featuredoc1.jpeg"
import "../../styles/Home.scss"

const Feature = () => {
  return (
    <div className='feature-container'>
       <div className="feature-left">
        <div className="feature-heading">
            Get virtual treatment everytime
        </div>
        <div className="feature-content">
            <p>1. schedule the appointment directly</p>
            <p>2. Search your physician here, and connect their office</p>
            <p>3. View our physicians who are accepting new patients</p>
        </div>

       </div>
       <div className="feature-right">
        <img src={featuredoc} alt="" />

       </div>
    </div>
  )
}

export default Feature