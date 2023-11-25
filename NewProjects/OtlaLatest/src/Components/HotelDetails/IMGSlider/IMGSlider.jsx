import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const IMGSlider = ({ selectedRoomData }) => {

  return (
    <section className="hotel_img_slider">
      <div style={{paddingTop:"1px"}} className="swiper hotel_slider">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {selectedRoomData?.data?.mainimage?.map((element,index)=>{
            return (
              <SwiperSlide>
                <div key={index} className="swiper-slide">
              
                <img style={{height:"300px"}} src={element?.url.replace("{size}","bigger")}  alt="" />
              </div>
            </SwiperSlide>


            )
          })
            
          }

        </Swiper>
      </div>
    </section>
  );
};

export default IMGSlider;
