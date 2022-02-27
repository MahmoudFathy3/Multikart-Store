import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Right from './Right/Right';
import Left from './Left/Left';

const Section = ({Product, dir , HandleShowProduct, isOpenModel , HandleCart}) => {
  return (
    <div className="Section-Product">
      <div className="container">
          <div className="index">
              <Left Product={Product} Swiper={Swiper} SwiperSlide={SwiperSlide} dir={dir}/>
              <Right Product={Product} Swiper={Swiper} SwiperSlide={SwiperSlide}  dir={dir}
              HandleShowProduct={HandleShowProduct} isOpenModel={isOpenModel} HandleCart={HandleCart}/>
          </div>
        </div>
      </div>
  )
}


export default Section