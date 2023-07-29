import React from 'react'
import abdoctor from "../../assets/images/abdoctor.jpeg"

const About = () => {
  return (
    <>
    <div className="about-container">
        <div className="about-left">
            <div className="main-img">
                <img src={abdoctor} alt="" />
            </div>
            <div className="secondary-img">

            </div>
        </div>
        <div className="about-right">
            <div className="heading">Proud to be one of the nations best</div>
            <div className="paragraph">We take pride in being recognized as one of the best in the industry. With a commitment to excellence, Lorem ipsum dolor sit amet consectetur adipisicing elit. Our dedicated team and exceptional services set us apart, ensuring your health and satisfaction.</div>
            <div className="button"><button>Learn More</button></div>

            
        </div>
    </div>
    </>
  )
}

export default About