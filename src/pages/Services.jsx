import React from 'react'
import ServicesList from '../components/services/ServicesList'

const Services = () => {
  return (
    <div className="service-section">
    <div className="content-container">
    <div className="content-heading">
            <div className='grid-center'>

            <h2>Our medical services</h2>
            </div>
            <p className='para-content-section'>World class care for everyone. Our health system offerd unmatched,
                expert health care.
            </p>
        </div>
        <ServicesList/>

    </div>

</div>
  )
}

export default Services