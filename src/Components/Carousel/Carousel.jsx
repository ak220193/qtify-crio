import React, { useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import "swiper/css";
import "swiper/css/navigation"; 
import CarouselLeftNavigation from "./CarouselLeftNav/CarouselLeftNav";
import CarouselRightNavigation from "./CarouselRightNav/CarouselRightNav";


const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0);
    }
  }, [data, swiper]);

  return null; 
};

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.Carouselwrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }} 
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />

        {data.map((element, index) => (
          <SwiperSlide key={index}>
            {renderComponent(element)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
