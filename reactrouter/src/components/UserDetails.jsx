import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
   const { userId }= useParams();
   
  return (
    <div>
      details about the user {userId}
    </div>
  )
}

export default UserDetails
