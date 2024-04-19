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
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          centerPadding: "10%",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          centerPadding: "10%",
        }
      }
      , {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          centerPadding: "25%",
        }
      }, {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          centerPadding: "20%",
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          centerPadding: "60px",
        }
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          centerPadding: "30px",
        }
      }
    ]
  };
  return <Slider {...settings}>{children}</Slider>;
}
