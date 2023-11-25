import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ExploreDeals = () => {
  return (
    <section className="explore-deals">
      <div className="container">
        <div className="heading">Explore Deals From Kolkata</div>
        <div className="swiper explore-deals-slider">
          <div className="swiper-wrapper">
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
              {" "}
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="box">
                    <figure>
                      <img src="assets/images/home/nepal.png" alt="" />
                    </figure>
                    <div className="content-box">
                      <div className="title">Kathmandu, Nepal</div>
                      <div className="text-flex">
                        <div className="left">
                          <strong>$500.00</strong>
                          <span>Per Person</span>
                        </div>
                        <label>
                          {" "}
                          <span>CCUKTM</span> Sep 30 – Oct 21
                        </label>
                      </div>
                    </div>
                    <div className="bottom-text">
                      <div className="left">
                        <p>
                          <span>$340</span> How we calculate this{" "}
                          <img src="assets/images/home/alert.png" alt="" />
                        </p>
                      </div>
                      <label>$400</label>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="box">
                    <figure>
                      <img src="assets/images/home/maldives.png" alt="" />
                    </figure>
                    <div className="content-box">
                      <div className="title">Male, Maldives</div>
                      <div className="text-flex">
                        <div className="left">
                          <strong>$500.00</strong>
                          <span>Per Person</span>
                        </div>
                        <label>CCUKTM Sep 30 – Oct 21</label>
                      </div>
                    </div>
                    <div className="bottom-text">
                      <div className="left">
                        <p>
                          <span>$340 </span> How we calculate this{" "}
                          <img src="assets/images/home/alert.png" alt="" />
                        </p>
                      </div>
                      <span>$400</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="box">
                    <figure>
                      <img src="assets/images/home/dubai.png" alt="" />
                    </figure>
                    <div className="content-box">
                      <div className="title">Dubai, UAE</div>
                      <div className="text-flex">
                        <div className="left">
                          <strong>$500.00</strong>
                          <span>Per Person</span>
                        </div>
                        <label>CCUKTM Sep 30 – Oct 21</label>
                      </div>
                    </div>
                    <div className="bottom-text">
                      <div className="left">
                        <p>
                          <span>$340 </span> How we calculate this{" "}
                          <img src="assets/images/home/alert.png" alt="" />
                        </p>
                      </div>
                      <span>$400</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="box">
                    <figure>
                      <img src="assets/images/home/malaysia.png" alt="" />
                    </figure>
                    <div className="content-box">
                      <div className="title">Kuala Lumpur, Malaysia</div>
                      <div className="text-flex">
                        <div className="left">
                          <strong>$500.00</strong>
                          <span>Per Person</span>
                        </div>
                        <label>CCUKTM Sep 30 – Oct 21</label>
                      </div>
                    </div>
                    <div className="bottom-text">
                      <div className="left">
                        <p>
                          <span>$340 </span> How we calculate this{" "}
                          <img src="/assets/images/home/alert.png" alt="" />
                        </p>
                      </div>
                      <span>$400</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default ExploreDeals;
