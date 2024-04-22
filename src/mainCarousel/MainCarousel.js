import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SlickCarousel from "../Components/SlickCarousel";

import "react-lazy-load-image-component/src/effects/blur.css";

export const MainCraousel = () => {
  return (
    // Main carousel image container
    <div className="h-screen">
      {/* Main carousel holder */}
      <SlickCarousel
        autoplay={true}
        arrows={false}
        infinite={true}
        pauseOnHover={false}
        autoplaySpeed={2000}
        speed={2000}
      >
        <div className="h-screen">
          <LazyLoadImage
            src={"/freelance-project/mainCarouselImages/mainCarousel1.webp"}
            effect="blur"
            width="100%"
            className="h-[100vh] sm:max-h-screen bg-contain object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <LazyLoadImage
            src={"/freelance-project/mainCarouselImages/mainCarousel2.webp"}
            effect="blur"
            alt="Main Carousel 1"
            width="100%"
            className="h-[100vh] sm:max-h-screen min-w-full bg-contain object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <LazyLoadImage
            src={"/freelance-project/mainCarouselImages/mainCarousel3.webp"}
            effect="blur"
            alt="Main Carousel 1"
            width="100%"
            className="h-[100vh] sm:max-h-screen min-w-full bg-contain object-cover"
            loading="lazy"
          />
        </div>
      </SlickCarousel>
      {/* Main carousel holder */}
    </div>
    // Main carousel image container
  );
};
