import React from 'react'
import dateFormat from 'dateformat'

const ChildRoute = ({ element1, index1, ImgPath,time }) => {
    
    console.log("index1", index1)
  return (
    <div style={{border:"1px solid teal"}} className="flightresutlgroup childRoute">
                  <div className="resultrow1">
                    <div className="row_label_col">
                      <div className="row_label">
                        <span className="fl_dir_on"></span>
                        {index1 === 0 ? "Departure" : "Return"}
                        <span className="top_l_triangle"></span>
                      </div>
                    </div>
                    <div className="empty_col">&nbsp;</div>
                    <div className="fl_locations">
                    {
                        element1?.Departure?.city
                      }
                    </div>
                    <div className="fl_locations">
                      {" "}
                      {
                        element1?.Arrival?.city
                      }
                    </div>
                  </div>
                  <div className="resultrow2">
                    <figure>
                      <img src={ImgPath} />
                    </figure>
                    <div className="textrow">
                      <strong>{element1?.Departure?.time}</strong>
                      <span>
                        {dateFormat(
                          element1?.Departure?.Datetime,
                          "ddd, dd mmm yyyy"
                        )}
                      </span>
              </div>
              <h4> {element1?.FlightTime} Hours   </h4>
                    <div className="textrow">
                      <strong>
                        {" "}
                        {
                          element1
                            ?.Arrival?.time
                        }
                      </strong>
                      <span>
                        {dateFormat(
                          element1?.Arrival?.Datetime,
                          "ddd, dd mmm yyyy"
                        )}
                      </span>
              </div>
              <h4>{element1?.CabinClassText}</h4>
           
          </div>
          <h4>Total:{time} Hours</h4>
                </div>
  )
}

export default ChildRoute
