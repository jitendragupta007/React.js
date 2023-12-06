import React from "react";
import TimingFilter from "./TimingFilter/TimingFilter";
import CheckBox from "./CheckBoxFilter/CheckBox";
import CheckBoxStatic from "./StaticCheckBox/CheckBoxStatic";

const FilterSearch = ({
  filteredData,
  selectedFwdPaths,
  setSelectedFwdPaths,
  selectedRvrsePaths,
  setSelecetedRvrsePaths,
  operatedBy,
  setOperatedBy,
}) => {
  return (
    <div className="container">
      <div className="inner_root">
        <div className="title">Filter Search</div>

        <TimingFilter filteredData={filteredData} />
        
        <CheckBoxStatic
          title={"Flight type"}
          Data={filteredData?.Filter?.destination_filters[0]}
          selectedFwdPaths={selectedFwdPaths}
          setSelectedFwdPaths={setSelectedFwdPaths}
        />

        <CheckBox
          title={"Operated By"}
          Data={filteredData?.Filter?.Airline}
          operatedBy={operatedBy}
          setOperatedBy={setOperatedBy}
        />

        <CheckBoxStatic
          title={"Flight type"}
          Data={filteredData?.Filter?.destination_filters[1]}
          selectedRvrsePaths={selectedRvrsePaths}
          setSelecetedRvrsePaths={setSelecetedRvrsePaths}
        />

        {/* <div className="filter_price">
          <h3>Operated by</h3>
          <div className="checkbox_items">
            <div className="form-group">
              <input type="checkbox" id="html3" />
              <label for="html4">Air Astana</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="html5" />
              <label for="html5">Air India</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="html6" />
              <label for="html6">Emirates Airlines</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="html7" />
              <label for="html7">Ethiopian Air Lines</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="html8" />
              <label for="html8">Etihad Airways</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="html9" />
              <label for="html9">Fly Dubai</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="html10" />
              <label for="html10">Gulf Air</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="html11" />
              <label for="html11">Kuwait Airways</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="html12" />
              <label for="html12">Oman Aviation</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="html13" />
              <label for="html13">Qatar Airways</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="html14" />
              <label for="html14">Saudi Arabian Airlines</label>
            </div>
          </div>
        </div>
        <div className="filter_price">
          <h3>Flight Type</h3>
          <div className="checkbox_items">
            <div className="form-group">
              <input type="checkbox" id="html" />
              <label for="html">Direct Flight</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="html1" />
              <label for="html1">1 Stop</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="html2" />
              <label for="html2">1+ Stop</label>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FilterSearch;
