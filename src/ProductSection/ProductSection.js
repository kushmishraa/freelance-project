import React from "react";
import SlickCarousel from "../Components/SlickCarousel";
import { Paper } from "@mui/material";

export const ProductSection = (props) => {
  const { heading, productArr } = props;
  const className = {
    productSectionContainer: "w-full  flex flex-col gap-[10px] p-[10px]",
    productSectionCarouselHolder: "max-w-full",
    singleProductContainer: "w-[100%] h-[450px] p-[10px]",
    productBannerImageContainer:
      "max-w-[250px] min-w-[250px] bg-white  shadow-lg hover:shadow-2xl transition delay-70 hover:mb-[20px]  cursor-pointer",
    productTileCarouselHolder:
      " absolute w-full top-0 scale-0 group-hover/productImage:scale-100 max-h-[400px] transition delay-70 ease-in origin-right",
  };
  return (
    // product section container
    <div className={className.productSectionContainer}>
      {/* product heading */}
      <div>
        <h2 className="text-2xl font-bold">{heading}</h2>
      </div>
      {/* product heading */}

      {/* product section carousel holder */}
      <div className={className.productSectionCarouselHolder}>
        <SlickCarousel
          arrows={false}
          autoplay={true}
          slidesToShow={4}
          pauseOnHover={true}
          infinite={true}
          showDots={false}
          centerMode={true}
          autoplaySpeed={2000}
          speed={100}
          centerPadding={"20%"}
        >
          {productArr?.map((productDetails) => {
            return (
              // single product container
              <div className={className.singleProductContainer}>
                {/* product banner image container */}
                <div className={className.productBannerImageContainer}>
                  <div className="group/productImage relative">
                    {/* product image */}
                    <div className="">
                      <img
                        src={productDetails.productBannerImage}
                        className="max-w-[100%] max-h-[100%]"
                        loading="lazy"
                      ></img>
                    </div>
                    {/* product image */}

                    {/* product tiles carousel holder */}
                    <div className={className.productTileCarouselHolder}>
                      <SlickCarousel
                        infinite={true}
                        autoplay={true}
                        pauseOnHover={false}
                        slidesToShow={1}
                        showDots={true}
                        autoplaySpeed={1000}
                        speed={500}
                      >
                        {productDetails.productTileImages.map((tileImages) => {
                          return (
                            // tile images
                            <div className="">
                              <img src={tileImages} loading="lazy" />
                            </div>
                            // tile images end
                          );
                        })}
                      </SlickCarousel>
                    </div>
                    {/* product tiles carousel holder */}
                  </div>

                  {/* product description bottom box container */}
                  <Paper elevation={4}>
                    <div className="p-[12px] border-2 hover:border-gray-400">
                      <div>
                        <h2 className="font-bold">
                          {productDetails.productHeading}
                        </h2>
                      </div>
                      <div>
                        <h2 className="text-gray-500">Pure Cotton tshirt</h2>
                      </div>

                      <div className="flex gap-[5px]">
                        <span className="font-bold font-xl">₹1,000</span>
                        <s className="font-normal text-gray-500">₹12,333</s>
                        <span className="text-green-700">50% Off</span>
                      </div>
                    </div>
                  </Paper>
                  {/* product description bottom box container */}
                </div>
                {/* product banner image container */}
              </div>
              // single product container end
            );
          })}
        </SlickCarousel>
      </div>
      {/* product section carousel holder */}
    </div>
    // product section container
  );
};
