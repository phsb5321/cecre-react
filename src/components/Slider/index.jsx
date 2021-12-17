import React, { useState } from 'react';
import { SectionImg, Wrapper } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

export const Slider = ({ picturesURLs }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];

  picturesURLs.forEach((pictureURL, index) => {
    slides.push(
      <SwiperSlide key={`slide-${index}`} tag="li">
        <SectionImg img={pictureURL} />
      </SwiperSlide>
    );
  });


  return (
    <Wrapper>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        centeredSlides={true}
        spaceBetween={1}
        slidesPerView={1}
        loop={true}
      >
        {slides}

      </Swiper>


    </Wrapper>
  );
};
