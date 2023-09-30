import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err =useRouteError();
    console.log(err)
  return (
    <div style={{marginTop:"120px",marginLeft: "100px"}}>
      <h1> Oops! something went wrong.</h1>
      <h3>{err.status}:{err.statusText}</h3>
    </div>
  )
}

export default Error
