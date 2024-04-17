import React, { Children } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickCarousel({ autoplay, children }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: autoplay,
        speed: 700,
        cssEase: "ease-in",
        pauseOnHover: false,
        dots: false,
        arrows: false,
        adaptiveHeight: true
    };
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    );
}