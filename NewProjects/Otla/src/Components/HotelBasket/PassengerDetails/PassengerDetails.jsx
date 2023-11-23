import React from 'react'

const PassengerDetails = () => {
  return (
    <div className="Passenger_basic_details">
    <div className="paxheading">Lead Pax Contact Details</div>
    <div className="paxinput_box">
        <ul>
            <li>
                <label>Phone Country Code <small>*</small> </label>
                <select>
                    <option>Select Country</option>
                    <option>Nigeria (+234)</option>
                    <option>Algeria (+213)</option>
                    <option>Andorra (+376)</option>
                    <option>Angola (+244)</option>
                    <option>Anguilla (+1264)</option>
                    <option>Antigua & Barbuda (+1268)</option>
                    <option>Argentina (+54)</option>
                    <option>Armenia (+374)</option>
                    <option>Aruba (+297)</option>
                </select>
            </li>
            <li>
                <label> Phone Number <small>*</small></label>
                <input type="text" placeholder="Enter Phone Number"/>
            </li>
            <li>
                <label>Email <small>*</small> </label>
                <input type="text" placeholder="Enter Email Here"/>
            </li>
        </ul>
    </div>
</div>
  )
}

export default PassengerDetails
