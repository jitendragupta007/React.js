import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Packages = () => {
  return (
    <section className="packages-row">
      <div className="container">
        <div className="heading">Flight + Hotel Packages</div>
        <div className="swiper packages-slider">
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
              <SwiperSlide>
                <div className="swiper-slide">
                  <figure>
                    <img src="assets/images/home/hotel.png" alt="" />
                  </figure>
                  <div className="content-box">
                    <div className="title">Luxor Hotel and Casino</div>
                    <label> Sanitizing Measures</label>
                    <p>
                      Roundtrip flight + Taxes and fees Los Angeles - Las Vegas
                      (Jun 17, 2023 - Jun 21, 2023) Coach
                    </p>
                    <div className="text-flex">
                      <div className="">
                        <strong>$500.00</strong>
                        <span>Per Person</span>
                      </div>
                      <a href=""> Select</a>
                    </div>
                    <p>
                      Roundtrip Flight + Hotel <br />
                      (incl. taxes & fees)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <figure>
                    <img src="assets/images/home/hotel1.jpg" alt="" />
                  </figure>
                  <div className="content-box">
                    <div className="title">Luxor Hotel and Casino</div>
                    <label> Sanitizing Measures</label>
                    <p>
                      Roundtrip flight + Taxes and fees Los Angeles - Las Vegas
                      (Jun 17, 2023 - Jun 21, 2023) Coach
                    </p>
                    <div className="text-flex">
                      <div className="">
                        <strong>$500.00</strong>
                        <span>Per Person</span>
                      </div>
                      <a href=""> Select</a>
                    </div>
                    <p>
                      Roundtrip Flight + Hotel <br />
                      (incl. taxes & fees)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <figure>
                    <img src="assets/images/home/hotel.png" alt="" />
                  </figure>
                  <div className="content-box">
                    <div className="title">Luxor Hotel and Casino</div>
                    <label> Sanitizing Measures</label>
                    <p>
                      Roundtrip flight + Taxes and fees Los Angeles - Las Vegas
                      (Jun 17, 2023 - Jun 21, 2023) Coach
                    </p>
                    <div className="text-flex">
                      <div className="">
                        <strong>$500.00</strong>
                        <span>Per Person</span>
                      </div>
                      <a href=""> Select</a>
                    </div>
                    <p>
                      Roundtrip Flight + Hotel <br />
                      (incl. taxes & fees)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <figure>
                    <img src="/assets/images/home/hotel1.jpg" alt="" />
                  </figure>
                  <div className="content-box">
                    <div className="title">Luxor Hotel and Casino</div>
                    <label> Sanitizing Measures</label>
                    <p>
                      Roundtrip flight + Taxes and fees Los Angeles - Las Vegas
                      (Jun 17, 2023 - Jun 21, 2023) Coach
                    </p>
                    <div className="text-flex">
                      <div className="">
                        <strong>$500.00</strong>
                        <span>Per Person</span>
                      </div>
                      <a href=""> Select</a>
                    </div>
                    <p>
                      Roundtrip Flight + Hotel <br />
                      (incl. taxes & fees)
                    </p>
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

export default Packages;
