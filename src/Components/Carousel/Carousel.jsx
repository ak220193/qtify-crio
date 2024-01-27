import React, { useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNav/CarouselLeftNav";
import CarouselRightNavigation from "./CarouselRightNav/CarouselRightNav";

const Controls = ({ data }) => {
  // console.log(data);
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return <></>;
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
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />

        {data.map((element) => (
          <SwiperSlide>{renderComponent(element)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
