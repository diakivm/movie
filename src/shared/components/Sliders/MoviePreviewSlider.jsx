// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { Navigation, A11y, Autoplay } from 'swiper';
import Loaders from '../../../utils/Loaders';
import MoviePreviewBase from '../MoviePrview/MoviePreviewBase';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './MoviePreviewSlider.scss'

export default ({items, isLoading, swiperClass, swiperSlideClass}) => {

  let fakeArray = Loaders.getFakeMoviePreviewBase(7, {width:"100%", 
                                                   height:"100%",
                                                   speed:2,
                                                   backgroundColor:"rgba(60, 60, 60, 0.2)",
                                                   foregroundColor:"rgba(60, 60, 60, 0.3)"})

  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={20}
      navigation
      loop={true}
      autoplay={{ delay: 3000 }}
      className={swiperClass}
      breakpoints={{
         0:{
            slidesPerView: 3
         },
         540: {
            slidesPerView: 4,
          },
         767: {
           slidesPerView: 5,
         },
         // when window width is >= 768px
         991: {
           slidesPerView: 7,
         },
       }}
    >
      {
         isLoading ? 
                   fakeArray.map((item, index) => {
                    return <SwiperSlide className={swiperSlideClass} key={index}>
                                {
                                  item
                                }
                          </SwiperSlide>
                    }) 
                   :
                   items.map((item) => {
                   return <SwiperSlide className={swiperSlideClass} key={item?.id}>
                               <MoviePreviewBase item={item}/>
                         </SwiperSlide>
                   })
      }
    </Swiper>
  )
}