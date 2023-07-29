import React , { useRef}from 'react'
import doctor6 from "../assets/images/doctor6.jpeg"
import doctor3 from "../assets/images/doctor3.jpeg"
import doctor4 from "../assets/images/doctor4.jpeg"
import doctor from "../assets/images/doctor.png"
import search from "../assets/images/search.png"
import booking from "../assets/images/booking.png"
import "../styles/Home.scss"
import {  FaArrowAltCircleRight } from 'react-icons/fa'
import About from '../components/about/About'
import Feature from '../components/feature/Feature'
import gsap from "gsap"
import Services from './Services'
import Doctors from './Doctors'
import Faq from './Faq'


const Home = () => {
    const targetElementRef = useRef();

    
  

    const handleButtonClick = () => {
        // Scroll to the target element
        targetElementRef.current.scrollIntoView({
          behavior: 'smooth', // You can change this to 'auto' for instant scrolling
          block: 'start',     // This will ensure the target element appears at the top of the viewport
          inline: 'nearest'   // This will make sure the element is brought into view in its own container
        });
      };
  
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
                <p>Welcome to our premier medical center, where we provide expert healthcare services, compassionate treatment, and state-of-the-art facilities. Our team of skilled professionals is dedicated to ensuring your well-being and long-lasting health.</p>
               </div>
               <div className="btn-section">
                <button onClick={handleButtonClick}>Medical services</button>
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
    <div  ref={targetElementRef} className="hero-content-section">
        <div className="content-container">
            <div className="content-heading">
                <div className='grid-center'>

                <h2>Providing the best medical services</h2>
                </div>
                <p className='para-content-section'>World class care for everyone. Our health system offerd unmatched,
                    expert health care.
                </p>
            </div>
            <div className="content-boxes">
                <div className="box1">
                    <div className="box-icon"><img src={doctor} alt="" /></div>
                    <div className="box-heading">Find a Doctor</div>
                    <div className="box-content">Discover dedicated medical professionals at our premier center</div>
                    <div className="box-arrow-icon"><FaArrowAltCircleRight/></div>
                </div>
                <div className="box1">
                    <div className="box-icon"><img src={search} alt="" /></div>
                    <div className="box-heading">Find a Location</div>
                    <div className="box-content">Explore our convenient medical locations for accessible and comprehensive care.</div>
                    <div className="box-arrow-icon"><FaArrowAltCircleRight/></div>
                </div>
                <div className="box1">
                    <div className="box-icon"><img src={booking} alt="" /></div>
                    <div className="box-heading">Book Appointment</div>
                    <div className="box-content">Effortlessly book an appointment with our esteemed medical team .</div>
                    <div className="box-arrow-icon"><FaArrowAltCircleRight/></div>
                </div>
                
                
            </div>
        </div>
    </div>
    <div  className='section1'>

    <About/>
    </div>
   <Services/>
    <section  className="feature section2">
    <Feature/>
    </section>
    <Doctors/>
    <Faq/>
    </>
  )
}

export default Home