import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickCarousel({
  autoplay,
  infinite,
  arrows,
  slidesToShow,
  centerMode,
  pauseOnHover,
  showDots,
  children,
  autoplaySpeed,
  speed,
  centerPadding
}) {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    speed: speed || 1000,
    cssEase: "ease-in",
    pauseOnHover: pauseOnHover,
    dots: false,
    arrows: arrows || false,
    autoplaySpeed: autoplaySpeed || 1000,
    slidesToShow: slidesToShow || 1,
    infinite: infinite,
    centerMode: centerMode || false,
    centerPadding: "100px"
  };
  return <Slider {...settings}>{children}</Slider>;
}
