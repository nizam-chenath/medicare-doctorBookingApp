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
            <div className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, atque? Sequi quis nesciunt, aliquid provident eligendi molestiae pariatur ipsa modi nostrum error hic ex, illo, temporibus impedit nobis magnam perspiciatis velit amet laborum non eum consequatur inventore possimus quia. Debitis ea accusamus sit? Veritatis.</div>
            <div className="button"><button>Learn More</button></div>

            
        </div>
    </div>
    </>
  )
}

export default About