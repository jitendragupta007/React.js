import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const BackBTNBar = () => {

   const  navigate = useNavigate()
    const sendBack = () => {
        navigate(-1)
    }
  return (
    <section className="back_button_top">
    <div className="container">
        <Link  onClick={sendBack}> <i className="fa fa-chevron-left" aria-hidden="true"></i> Back </Link>
        <div className="right_text">
            <label>Delmon Boutique Hotel </label>
            <div className="icon">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <p>Naif St . , Dubai</p>
        </div>
    </div>
</section>
  )
}

export default BackBTNBar
