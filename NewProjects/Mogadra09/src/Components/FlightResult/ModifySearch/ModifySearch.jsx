import React from "react";
import SearchFlight from "../../../Screens/SearchFlight/SearchFlight";
import FilterSearch from "../FilterSearch/FilterSearch";

const ModifySearch = ({ showModify, handleModify,handleFilterShow, showFilter, filteredData,selectedFwdPaths,setSelectedFwdPaths,selectedRvrsePaths,setSelecetedRvrsePaths,operatedBy,setOperatedBy,setSelectedTotalTime }) => {
  return (
    <>
      <section className="fliter_search">
        <div className="container">
          <div className="modify_search_btn" onClick={handleModify}>
            Modify Search
            <span className="triangle triangle--up"> </span>
          </div>
          <div className="filter_btn" onClick={handleFilterShow}>
            <img src="/assets/images/home/filter.svg" alt=""  /> Filter
          </div>
        </div>
      </section>

      <section className={`modify_search ${showModify ? "active" : ""}`}>
        <div onClick={handleModify} className="closebtn">
          <img src="/assets/images/home/close.svg" alt="" />
        </div>

        <SearchFlight />
      </section>

      <section className={`modify_search ${showModify ? "active" : ""}`}>
        <div onClick={handleModify} className="closebtn">
          <img src="/assets/images/home/close.svg" alt="" />
        </div>

        <SearchFlight />
      </section>


      <section className={`filter_list  ${showFilter ? "active" : ""}   `} >
        <div className="closebtn" onClick={handleFilterShow} ><img src="/assets/images/home/close.svg" alt="" /></div>
        <FilterSearch filteredData={filteredData}
        selectedFwdPaths={selectedFwdPaths}
        setSelectedFwdPaths={setSelectedFwdPaths}
         selectedRvrsePaths={selectedRvrsePaths}
         setSelecetedRvrsePaths ={  setSelecetedRvrsePaths}
          operatedBy={operatedBy}
          setOperatedBy={setOperatedBy}
          setSelectedTotalTime={setSelectedTotalTime}
        />
     </section>


    </>
  );
};

export default ModifySearch;
