import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.css";
import {Fade} from 'react-reveal'

// Import Swiper styles
import "swiper/css";

//import the swiper images
import Ecommerce from "../../images/ecommerce.png";
import Hoc from "../../images/hoc.png";
import MusicApp from "../../images/musicapp.png";
import Sidebar from "../../images/sidebar.png";

const Swipers = () => {
  return (
    <>
      <Fade bottom>
        <h1 className="hh">Protofolio</h1>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Ecommerce} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Hoc} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MusicApp} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sidebar} alt="" />
          </SwiperSlide>
        </Swiper>
      </Fade>
    </>
  );
};

export default Swipers;
