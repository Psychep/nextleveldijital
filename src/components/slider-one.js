import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SliderOneData } from "@/data";
import Video from "@/images/video.mp4"

SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderOne = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: false,
    effect: "fade",
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },
    autoplay: {
      delay: 5000000,
    },
  };
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        {SliderOneData.map(({ image, subTitle, title, button }, index) => (
          <SwiperSlide key={index}>
            <video
              className="image-layer"
              height="100%"
              width="100%"
              loop
              muted
              autoPlay
            >
              <source
                src={Video}
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  );
};

export default SliderOne;
