import React from 'react'
import doctors from "../../json/doctors.json"
import DoctorCard from './DoctorCard'

const DoctorList = () => {
  return (
    <div className='doctor-list'>
         {doctors.map((item)=> <DoctorCard item={item} /> )}
    </div>
  )
}

export default DoctorList