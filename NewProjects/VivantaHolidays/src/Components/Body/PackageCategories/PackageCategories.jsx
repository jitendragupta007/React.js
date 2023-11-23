import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useHomePage } from "../../../ContextStore/HomePageData";
import Child1PackageCategory from "./Child1PackageCategory";

const PackageCategories = () => {
  const homeData = useHomePage();
  console.log("homeData", homeData);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    setCategoryData(homeData?.top_travel_destination);
  }, [homeData]);

console.log("categoryData", categoryData);

  return (
    <section className="package-categories container">
      <div className="common-heading">
        <strong> Top Trending Travel Destinations</strong>
      </div>
      <div className="swiper mySdwiper top-packages">
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {categoryData?.map((element, index) => {
            return (
              <SwiperSlide>
                <Child1PackageCategory
                  key={index}
                  countryName={element?.countryname}
                  packageImage={element?.packageimage}
                  totalTourPackage={element?.totaltourpackage}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default PackageCategories;
