import React,{useEffect,useState,useCallback,useMemo} from 'react'
import {BsInstagram} from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const PeopleFamous = ({Famous, dir}) => {
  const rootWidth = document.querySelector("#root");
  const width = rootWidth.offsetWidth;
  const [pageWidth, setPageWidth] = useState(width);
  
  useMemo(() => {
    window.onresize = () => {
      const width2 = rootWidth.offsetWidth;
        setPageWidth(width2)
      }
    },[rootWidth])
    

    const HandelSlide = () =>{
      if(pageWidth <= 575 ){
        return 1;
      } 
      else if(pageWidth > 575 && pageWidth < 767) {
        return 2;
      }
      else if(pageWidth > 767 && pageWidth < 991) {
        return 3;
      }
      else if(pageWidth > 991 && pageWidth < 1199) {
        return 4;
      }
      else if(pageWidth > 1199) {
        return 5;
      }
    }

  const List = Famous?.map((item,index) => {
    return (
      <SwiperSlide key={index} className="List-Famous"  >
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
        slidesPerView={HandelSlide()}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        centeredSlides={false}
        className="mySwiper"
        dir='ltr'
      >
        {List}
      </Swiper>
      </div>
  )
}

export default PeopleFamous