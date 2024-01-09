import React from 'react';
import css from './Testimonials.module.css';
import Hero from '../../assets/testimonialHero.png';
import {Swiper , SwiperSlide} from 'swiper/react';
import { TestimonialsData } from '../../data/testimonials';

import 'swiper/css';

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
           <div className={css.container}>
              <span>Top Rated</span>
              <span>seedily say has suitable disposal and boy.exercise joy man 
              children rejoiced</span>
           </div>

           <img src={Hero} alt='hero'/>

           <div className={css.container2}>
              <span>100K</span>
              <span>Happy Customers With Us</span>
           </div>
        </div>

        <span className={css.reviews}>reviews</span>

        <div className={css.carousal}>
            <Swiper
            slidesPerGroup={1}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            grabCursor={true}
            className={css.myswiper}
            breakpoints={{
              856 : {
                slidesPerView : 3
              },
              640 : {
                slidesPerView : 2
              },
              0 : {
                slidesPerView : 1
              }
            }}
            >
                {TestimonialsData.map((testimonial , i) => (
                   <SwiperSlide key={i}>
                    <div className={css.testimonial}>
                        <img src={testimonial.image} alt='profile'/>
                        <span>{testimonial.comment}</span>
                        <hr/>
                        <span>{testimonial.name}</span>
                    </div>
                   </SwiperSlide>
                ))
                }
            </Swiper>

        </div>
    </div>
  )
}

export default Testimonials