import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SlickCarousel from "../Components/SlickCarousel";

import "react-lazy-load-image-component/src/effects/blur.css";

export const MainCraousel = () => {
  return (
    <div className="h-screen">
      <SlickCarousel
        autoplay
        arrows={false}
        infinite={true}
        pauseOnHover={false}
        autoplaySpeed={2000}
        speed={2000}
      >
        <div className="h-[100%]">
          <LazyLoadImage
            src={"/freelance-project/mainCarouselImages/mainCarousel1.jpg"}
            effect="blur"
            width="100%"
            className="max-h-screen bg-contain object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <LazyLoadImage
            src={"/freelance-project/mainCarouselImages/mainCarousel2.jpg"}
            alt="Main Carousel 1"
            className="max-h-screen min-w-full bg-contain object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <LazyLoadImage
            src={"/freelance-project/mainCarouselImages/mainCarousel3.jpg"}
            alt="Main Carousel 1"
            className="max-h-screen min-w-full bg-contain object-cover"
            loading="lazy"
          />
        </div>
      </SlickCarousel>
    </div>
  );
};
