import React from 'react'
import "../App.css"
import { NavLink} from "react-router-dom"

const Header = () => {
const navLinkStyles=({isActive})=>{
return {

textDecoration: "none",
fontWeight: isActive ?  "bold" :"normal",
textDecoration: isActive? "none" : "none",
color: isActive? "black" : "white",
fontSize: "30px",
padding:"10px"


}


}


  return (
    <div id="nav">
     <NavLink style={navLinkStyles} to={'/'}>Home</NavLink>
      <NavLink  style={navLinkStyles} to={'/about'}>About</NavLink>
    <NavLink  style={navLinkStyles} to={'/contact'}>Contact</NavLink>
     
    </div>
  )
}

export default Header
