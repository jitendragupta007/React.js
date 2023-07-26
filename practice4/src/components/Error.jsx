import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Error = () => {

  const navigate =useNavigate();
  return (
    <>\
    <div>
      <h1>Error: 404  Page not found</h1>
    </div>
    <button onClick={()=>navigate(-1)}>Go Back</button>
    </>
  )
}

export default Error
