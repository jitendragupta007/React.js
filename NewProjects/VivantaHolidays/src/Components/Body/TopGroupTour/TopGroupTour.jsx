import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useHomePage } from "../../../ContextStore/HomePageData";
import Child1TopGroupTour from "./Child1TopGroupTour";

const TopGroupTour = () => {
  const homeData = useHomePage();

  const [TopGroupTourData, setTopGroupTourData] = useState([]);

  useEffect(() => {
    setTopGroupTourData(homeData?.packagelist);
  },[homeData]);

  console.log("GroupTourData", TopGroupTourData);

  return (
    <div>
      <section className="best-selling">
        <div className="container">
          <div className="common-heading">
            <strong className="big">Top Group Tours Packages</strong>
            <small>
              {" "}
              Our collection of the most popular adventures in 2022.
            </small>
          </div>
          <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {TopGroupTourData?.map((element) => {
              return (
                <SwiperSlide>
                  <Child1TopGroupTour key={element.id} element={element} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default TopGroupTour;
