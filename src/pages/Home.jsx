import React from 'react'
import doctor6 from "../assets/images/doctor6.jpeg"
import doctor3 from "../assets/images/doctor3.jpeg"
import doctor4 from "../assets/images/doctor4.jpeg"
import "../styles/Hero.scss"

const Home = () => {
  return (
    <>
    {/* ======= hero section ========== */}

    <section className='hero-section'>
        <div className="hero-container">
            <div className="hero-left-section">
               <div className="main-content">
                We help patients live a healthy, longer life.
               </div>
               <div className="para-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate similique cumque debitis velit totam eius amet, officia tenetur ratione dolores, sit, atque possimus eos quos soluta veniam dicta eligendi dolor vitae nemo tempora cum!</p>
               </div>
               <div className="btn-section">
                <button>Request an Appointment</button>
               </div>
               <div className="three-boxes">
                <div className="box1">
                    <div className="number">30 +</div>
                    <div className="num-content">years of Experience</div>
                </div>
                <div className="box1">
                    <div className="number">15 +</div>
                    <div className="num-content">clinic Locaitons</div>
                </div>
                 <div className="box1">
                    <div className="number">100 %</div>
                    <div className="num-content">patient Satisfaction</div>
                </div>
                
               </div>
            </div>
            <div className="hero-right-section">
              <div className="left-img">
                <img src={doctor4} alt="" />
              </div>
              <div className="right-imgs">
                <div className="right-img1"><img src={doctor3} alt="" /></div>
                <div className="right-img2"><img src={doctor6} alt="" /></div>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home