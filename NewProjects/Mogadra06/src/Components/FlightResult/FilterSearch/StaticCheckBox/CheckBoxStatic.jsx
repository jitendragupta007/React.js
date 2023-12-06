import React from "react";

const CheckBoxStatic = ({ title, Data }) => {
  return (
    <>
      <div className="filter_price">
        
              <h3>{title}</h3>
        <h3>{Data?.from}-{Data?.to}</h3>
        {Data?.stops?.direct !== 0 && (
          <div className="form-group">
            <input type="checkbox" id="html" />
            <label for="html">Direct</label>
          </div>
        )}

        {Data?.stops?.onestop !== 0 && (
          <div className="form-group">
            <input type="checkbox" id="html" />
            <label for="html">One Stop</label>
          </div>
        )}
        
        {Data?.stops?.morethanonestop !== 0 && (
          <div className="form-group">
            <input type="checkbox" id="html" />
            <label for="html">1+Stops</label>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckBoxStatic;
