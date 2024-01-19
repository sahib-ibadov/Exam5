// import React from 'react'
import "./Section1.scss"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
function Section1() {
  return (
    <div style={{marginTop:"30px"}}>
      <Swiper
        //  loop={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="section1__swipper">
          <img src="https://preview.colorlib.com/theme/wines/images/hero_1.jpg" alt="" />
          <div className="section1_in">
            <p>WELCOME</p>
            <h1><b>GRAP WINE</b></h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="section2__swipper"><img src="https://preview.colorlib.com/theme/wines/images/hero_2.jpg" alt="" />
          <div className="section2_in">
            <p>ROYAL WINE</p>
            <h1><b>WINES FOR <br /> EVERYONE</b></h1>
          </div>

        </SwiperSlide>

      </Swiper>

    </div>
  )
}

export default Section1
