import React from "react";
import SearchFlight from "../../../Screens/SearchFlight/SearchFlight";

const ModifySearch = () => {
  return (
    <>
      <section className="fliter_search">
        <div className="container">
          <div className="modify_search_btn">
            Modify Search
            <span className="triangle triangle--up"> </span>
          </div>

          <div className="filter_btn">
            <img src="assets/images/home/filter.svg" alt="" /> Filter
          </div>
        </div>
      </section>

      <section className="modify_search">
        <div className="closebtn">
          <img src="assets/images/home/close.svg" alt="" />
        </div>

        <SearchFlight />
      </section>
    </>
  );
};

export default ModifySearch;
