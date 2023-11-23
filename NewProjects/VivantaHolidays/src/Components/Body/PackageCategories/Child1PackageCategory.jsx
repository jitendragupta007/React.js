import React from "react";

const Child1PackageCategory = ({
  countryName,
  packageImage,
  totalTourPackage,
}) => {
  console.log("childData", countryName, packageImage, totalTourPackage);
  const ImgUrl = `https://vivantaholiday.com/tempimage/${packageImage}`;
  return (
    <>
      <figure>
        <img src={ImgUrl} alt="Package" />
      </figure>
      <div className="content">
        <div className="left">
          <strong>{countryName}</strong>
          <small>{totalTourPackage}+ Packages</small>
        </div>
        <div className="right">From ₹26,170</div>
      </div>
    </>
  );
};

export default Child1PackageCategory;
