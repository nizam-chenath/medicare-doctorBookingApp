import React from 'react'
import servicedata from "../../json/services.json"
import ServicesCard from './ServicesCard'

const ServicesList = () => {
  return (
    <div className="service-card-section">
        {servicedata.map((data, i) => <ServicesCard data={data} index={i} key={i}/>)}
    </div>
    
  )
}

export default ServicesList