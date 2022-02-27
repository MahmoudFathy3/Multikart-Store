import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const PeopleFamous = ({Famous, dir}) => {
  const List = Famous?.map((item,index) => {
    return (
      <SwiperSlide key={index} className="List-Famous" >
            <img src={item.image} alt="" />
            <div className="Famous-Info">
              <BsInstagram className="icon-Famous"/>
            </div>
        </SwiperSlide>
    )
  })
  return (
    <div className="Famous">
      <h3> {dir === 'ltr' ? '# instagram' : '# الانستغرام'}</h3>
      <Swiper
        slidesPerView={6}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        centeredSlides={false}
        className="mySwiper"
        dir='ltr'
        style={{width: '100%'}}
      >
        {List}
      </Swiper>
      </div>
  )
}

export default PeopleFamous