import React, {useContext} from 'react'
import {AppState}  from "../App.js"
import {NameContext} from  '../App.js'


const CompC = ( ) => {
    const AppData = useContext(AppState)
    const NameData = useContext(NameContext)
     //AppData is an object of {data, name}
    //NameData is " name " object here

  return (
    <div className="CompC">
      <h3>CompC</h3>
      <h3>{AppData.data}</h3>
      <h3>Name:{AppData.name.name}</h3>
      <h3>Age:{AppData.name.age}</h3>
      <h4>Age:{NameData.age}</h4>
      {console.log(NameData)}
      

      
    </div>
  )
}

export default CompC
