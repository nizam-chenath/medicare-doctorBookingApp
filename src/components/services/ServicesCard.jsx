import { FaArrowAltCircleRight } from 'react-icons/fa'

const ServicesCard = ({data,index}) => {
  return (
    <div className="service-card">
        <div className="heading">{data.name}</div>
        <div className="description-service">{data.description}</div>
        <div className="indexandarrow">
        <div className="box-arrow-icon"><FaArrowAltCircleRight/></div>
        <div className="index-service"><p>{index+1}</p></div>
        </div>
       
    </div>
  )
}

export default ServicesCard