import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";
import data from "./data.json";

export default function Swiperapp() {
  return (
    <>
      <Swiper className="mySwiper">
        {data.map((card, index) => (
          <SwiperSlide key={index} className="swiper-container">
            <h1 className="swiper-h1">{card.header}</h1>
            <p className="swiper-p">{card.subheader}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
