import React from 'react'
import "../App.css"

const SearchBar = ( {
 value,
 isloading,
 handleSubmit,
 onChange,
}) => {
  return (
   <form onSubmit={handleSubmit} id="form">
  <input  
    type="search"     
    value={value}
    disabled={isloading}
    onChange={onChange}
    placeholder ="Search Recipes"
    className="form-control"
  />
  <input 
  
  disabled ={isloading || !value}
  type="submit" 
  className="btn" 
  value="Search"/>
  </form>
  )
}

export default SearchBar
