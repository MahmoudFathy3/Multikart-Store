import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

const SlideShow = ({slideShow}) => {

  const ListSlide = slideShow?.map(item => {
    return(
        <SwiperSlide key={item.id}>
            <div className="ListSlide">
              <img src={item.image} alt="" />
            </div>
            <div className="List-Caption">
              <span>{item.name}</span>
              <h2>{item.about}</h2>
          <button className='Slide-btn'>{item.button}</button>
            </div>
          </SwiperSlide>
    )
  })


  return (
<Swiper navigation={true} modules={[Navigation]} className="mySwiper" dir='ltr'>
  {ListSlide}
</Swiper>
);

}

export default SlideShow