import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import css from "./Slider.module.css"
import 'swiper/css';



import {SliderProducts} from '../../data/products'



const Slider = () => {
  return (
    <div className={css.s_container}>
      <Swiper 
        className={css.swiper}
        grabCursor={true}
        slidesPerGroup={1}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          0 :{
            slidesPerView :1
          },
          440 : {
            slidesPerView :2
          },
          856 : {
            slidesPerView :3
          }
        }}
        >
         {SliderProducts.map((slide, i ) => (
            <SwiperSlide  className={css.swiper_slide}key={i}>
                <div className={css.left_s}>
                    <div className={css.name}>
                        <span>{slide.name}</span>
                        <span>{slide.detail}</span>
                    </div>

                    <span>{slide.price}$</span>

                    <div>our new product</div>
                </div>

                <img src={slide.img} alt='product' className={css.img_p}/>

            </SwiperSlide>
         ))}
         
      </Swiper>
      
    </div>
  )
}

export default Slider