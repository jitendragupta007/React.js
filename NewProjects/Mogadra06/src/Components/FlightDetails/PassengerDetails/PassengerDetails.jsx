import React from 'react'

const PassengerDetails = () => {
  return (
      <div>
           <div className="passenger_details">
                <h3>Passenger Details</h3>
                <div className="pax_row">
                    <p>If you have an account!</p>
                    <div className="title">Continue without Login</div>
                    <div className="adult_text">Adult 1</div>

                    <div className="title_radio">
                        <h5>Title<sub>*</sub></h5>
                        <div className="radio_button_roots">
                            <div className="box">
                                <input type="radio" id="test0" name="radio-group" />
                                <label for="test0">Mr</label>
                            </div>
                            <div className="box">
                                <input type="radio" id="testm" name="radio-group" />
                                <label for="testm">Miss</label>
                            </div>
                            <div className="box">
                                <input type="radio" id="testr" name="radio-group" />
                                <label for="testr">Mrs</label>
                            </div>
                        </div>

                        <div className="input_sections">
                            <div className="box">
                              <label>First Name<span style={{ color: "red" }}>*</span></label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="box">
                                <label>Last Name<span style={{ color: "red" }}>*</span></label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="box">
                                <label className="no_wrap_no">Phone Number<span style={{ color: "red" }}>*</span></label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="box">
                                <label>Email ID<span style={{ color: "red" }}>*</span></label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="box">
                                <label>Date of Birth<span style={{ color: "red" }}>*</span></label>
                                <div className="inner_row">
                                    <select>
                                        <option>1998 </option>
                                        <option>1997 </option>
                                        <option>1996 </option>
                                    </select>
                                    <select>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                    <select>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            </div>
                            <div className="box">
                                <label>Date of Birth<span style={{ color: "red" }}>*</span></label>
                                <div className="inner_row">
                                    <select>
                                        <option> </option>
                                        <option> </option>
                                        <option> </option>
                                    </select>
                                    <select>
                                        <option> </option>
                                        <option> </option>
                                        <option> </option>
                                    </select>
                                    <select>
                                        <option> </option>
                                        <option> </option>
                                        <option> </option>
                                    </select>
                                </div>
                            </div>

                            <div className="box">
                                <label>Passport Number</label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="box">
                                <label>Nationality</label>
                                <select>
                                    <option>AFGHANISTAN</option>
                                    <option>ÅLAND ISLANDS</option>
                                    <option>ALGERIA</option>
                                    <option>ARUBA</option>
                                    <option>BURUNDI</option>
                                    <option>CAMEROON</option>
                                    <option>Curaçao, Netherlands Antilles</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default PassengerDetails
