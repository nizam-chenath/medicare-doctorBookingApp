import React from 'react'
import DoctorList from '../components/doctors/DoctorList'

const Doctors = () => {
  return (
    <section>
    <div className="doctor-container">

<div className="doctor-heading">
            <div className='grid-center'>

            <h2>Our great Doctors</h2>
            </div>
            <p className='para-doctor-section'>World class care for everyone. Our health system offerd unmatched,
                expert health care.
            </p>
        </div>
        <DoctorList/>

    </div>
</section>
  )
}

export default Doctors