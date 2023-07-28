import React from 'react'
import { FaHome, FaSearch, FaSearchLocation } from 'react-icons/fa';
import Rating from 'react-rating-stars-component';


const DoctorCard = ({item}) => {
  return (
    <div className='doctor-card'>
        <div className="doctor-img">
            <img src={item.photo} alt="" />
        </div>
        <div className="doctor-name">{item.name}</div>
        <div className="doctor-specilization">{item.specialization}</div>
        <div className="rating">
        <Rating
            count={5}
            size={24}
            value={item.rating}
            edit={false} // Set to true if you want to enable user rating
            isHalf={true} // Set to true to allow half-star ratings
            activeColor="#ffd700"
          />
        <div className="doctor-rating"><p>{item.rating}({item.total_patients})</p></div>
        </div>
        
        <div className="doctor-hospital"><FaHome/> {item.hospital}</div>
        
        </div>
  )
}

export default DoctorCard