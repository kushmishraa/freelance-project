import React from "react";
import SlickCarousel from "../Components/SlickCarousel";
import { Paper } from "@mui/material";

export const ProductSection = (props) => {
  const { heading, productArr } = props;
  return (
    <div className="w-full flex flex-col gap-[10px] p-[10px]">
      <div>
        <h2 className="text-2xl font-bold">{heading}</h2>
      </div>
      <div className="max-w-full">
        <SlickCarousel
          arrows={false}
          autoplay={true}
          slidesToShow={4}
          pauseOnHover={true}
          infinite={true}
          showDots={false}
          centerMode={true}
          autoplaySpeed={2000}
          speed={2000}
          centerPadding={"20%"}
        >
          {productArr?.map((productDetails) => {
            return (
              <div className="w-[100%] h-[450px] p-[10px]">
                <div
                  className="max-w-[250px] min-w-[250px]
                bg-white  shadow-lg hover:shadow-2xl transition delay-70 
                hover:mb-[20px] hover:border-2 hover:border-black cursor-pointer hover:rounded-b"
                >
                  <div className="group/productImage relative">
                    <div className="">
                      <img
                        src={productDetails.productBannerImage}
                        className="max-w-[100%] max-h-[100%]"
                        loading="lazy"
                      ></img>
                    </div>

                    <div
                      className=" absolute w-full top-0 scale-0
                      group-hover/productImage:scale-100
                      max-h-[400px] transition delay-70 ease-in origin-right"
                    >
                      <SlickCarousel
                        infinite={true}
                        autoplay={true}
                        pauseOnHover={false}
                        slidesToShow={1}
                        showDots={true}
                        autoplaySpeed={1000}
                        speed={1000}
                      >
                        {productDetails.productTileImages.map((tileImages) => {
                          return (
                            <div className="">
                              <img src={tileImages} loading="lazy" />
                            </div>
                          );
                        })}
                      </SlickCarousel>
                    </div>
                  </div>
                  <Paper elevation={4}>
                    <div className="p-[12px] border-black">
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
                </div>
              </div>
            );
          })}
        </SlickCarousel>
      </div>
    </div>
  );
};
