import React from 'react'
import CompB from './CompB'
import '../App.css'

const CompA = () => {
  return (
    <div className="CompA">
    <h3>CompA</h3>
      <h3> <CompB/> </h3>
     
    </div>
  )
}

export default CompA

