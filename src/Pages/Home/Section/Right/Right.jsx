import React from 'react'
import {AiOutlineHeart,AiOutlineSearch} from 'react-icons/ai'

const Right = ({Product,Swiper, SwiperSlide, dir, HandleShowProduct, isOpenModel, HandleCart }) => {
  
  const HandleProductsModal = (item) =>{
    HandleShowProduct(item)
    isOpenModel()
  }

  const List =  Product?.map((item,index) => {
      return (<SwiperSlide key={index} className='SwiperSlide' >
      <img src={item.image} alt=''  />
        <div className="Product-info" >
          <div className="info-item">
            <AiOutlineHeart className="Product-icons"/>
            <AiOutlineSearch className="Product-icons" onClick={() => HandleProductsModal(item)}/>
          </div>
          <button onClick={() => HandleCart(item)}>{item.button}</button>
        </div>
      </SwiperSlide>
    )
  })

  return (
    <div className="Right">
    <div className="header-Swiper">
        <span>{dir === "ltr" ? "RECOMMENDATIONS FOR YOU" : "توصيات بالنسبة لك"}</span>
        <div className="New-Product">
          <span> {dir === "ltr" ? "New Product" : "منتج جديد"}</span>
          <span> {dir === "ltr" ? "Featured Products" : "منتجات مميزة"}</span>
        </div>
      </div> 
    <Swiper  slidesPerView={3} className="mySwiper" dir='ltr'>
      {List}
    </Swiper>
    <div className="Swiper-Image">
      <img src={Product && Product[2].image} alt='' />
    </div>
  </div>
)
}

export default Right