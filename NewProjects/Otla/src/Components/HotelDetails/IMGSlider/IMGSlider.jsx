import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const IMGSlider = () => {
  return (
    <section className="hotel_img_slider">
      <div className="swiper hotel_slider">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <img src="/assets/images/home/slider1.jpg" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="/assets/images/home/slider2.jpg" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="/assets/images/home/slider3.jpg" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="/assets/images/home/slider4.jpg" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="/assets/images/home/slider5.jpg" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="/assets/images/home/slider6.jpg" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="/assets/images/home/slider7.jpg" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="/assets/images/home/slider8.jpg" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <img src="/assets/images/home/slider9.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default IMGSlider;
