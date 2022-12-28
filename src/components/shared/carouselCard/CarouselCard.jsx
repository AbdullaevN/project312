import { useState, useRef, useEffect } from "react";
import arrowOrange from "../../../assets/images/arrowOrange.png";
import call from "../../../assets/images/tel.png";
import "./carouselcard.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import "bootstrap/dist/css/bootstrap.min.css";
import { CardD } from "../../Card";
import { useSwiper } from "swiper/react";

// import SwiperButtonNext from "../SwiperButtonNext/SwiperButtonNext";

// Data
// import data from "./data.json";

const CarouselCard = () => {
  // const swiper = useSwiper();
  // console.log(useSwiper);
  // const nexto = () => {
  //   swiper.slideNext();
  // };

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  return (
    <>
      <div className="container py-4 px-4 justify-center bg-dark">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <CardD data={{ price: "$10", title: "title" }} />
          </SwiperSlide>
          <SwiperSlide>
            <CardD data={{ price: "$13", title: "34r34r" }} />
          </SwiperSlide>
          <SwiperSlide>
            <CardD data={{ price: "$14", title: "rtgrtgertg" }} />
          </SwiperSlide>
          <SwiperSlide>
            <CardD data={{ price: "$15", title: "ervgerg" }} />
          </SwiperSlide>
        </Swiper>
        <button className="bg-black" onClick={() => swiper.slideNext()}>
          Slide to the next slide
        </button>

        {/* <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
        >
          <SwiperButtonNext>Slide</SwiperButtonNext>
          {ads.map((ad) => (
            <SwiperSlide>slider explanation</SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </>
  );
};

export default CarouselCard;
