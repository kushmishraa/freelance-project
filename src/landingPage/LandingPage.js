import React from "react";
import { MainCraousel } from "../mainCarousel/MainCarousel";
import { ProductSection } from "../ProductSection/ProductSection";

export const LandingPage = () => {
  const productArr = [
    {
      productHeading: "Bulmer Tshirt",
      productBannerImage: "/freelance-project/productCatImages/tshirt1.jpg",
      productTileImages: [
        "/freelance-project/productCatImages/tshirt1-2.jpg",
        "/freelance-project/productCatImages/tshirt1-3.jpg",
        "/freelance-project/productCatImages/tshirt1-4.jpg",
      ],
    },
    {
      productHeading: "StormBorn",
      productBannerImage: "/freelance-project/productCatImages/tshirt2.jpg",
      productTileImages: [
        "/freelance-project/productCatImages/tshirt2-1.jpg",
        "/freelance-project/productCatImages/tshirt2-2.jpg",
        "/freelance-project/productCatImages/tshirt2-3.jpg",
      ],
    },
    {
      productHeading: "Bulmer Tshirt",
      productBannerImage: "/freelance-project/productCatImages/tshirt1.jpg",
      productTileImages: [
        "/freelance-project/productCatImages/tshirt1-2.jpg",
        "/freelance-project/productCatImages/tshirt1-3.jpg",
        "/freelance-project/productCatImages/tshirt1-4.jpg",
      ],
    },
    {
      productHeading: "StormBorn",
      productBannerImage: "/freelance-project/productCatImages/tshirt2.jpg",
      productTileImages: [
        "/freelance-project/productCatImages/tshirt2-1.jpg",
        "/freelance-project/productCatImages/tshirt2-2.jpg",
        "/freelance-project/productCatImages/tshirt2-3.jpg",
      ],
    },
  ];
  return (
    <div>
      <div className="">
        <MainCraousel />
      </div>
      <div className="flex flex-col sm:flex-row justify-center w-full gap-[30px] p-[20px] ">
        <div className="group bg-black relative  h-[400px] w-full">
          <img
            src="/freelance-project/categoryImages/catImage1.jpg"
            className="h-[100%] w-[100%] bg-transparent hover:opacity-50 "
            loading="lazy"
          />
          <div
            className="
            w-full flex justify-center items-end
          absolute opacity-0 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-50
          top-0 bottom-0 left-0
          right-0  transition delay-70
           ease-in pb-[30px]"
          >
            <button className="text-white border-2 border-white px-[15px] py-[10px] opacity-100 hover:bg-white hover:text-black transition dely-70">
              Shop Now
            </button>
          </div>
        </div>
        <div className="group bg-black relative  h-[400px] w-full">
          <img
            src="/freelance-project/categoryImages/catImage2.jpg"
            className="h-[100%] w-[100%] bg-transparent hover:opacity-50"
            loading="lazy"
          />
          <div
            className="
            w-full flex justify-center items-end
          absolute opacity-0 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-50
          top-0 bottom-0 left-0
          right-0  transition delay-70
           ease-in pb-[30px]"
          >
            <button className="text-white border-2 border-white px-[15px] py-[10px] opacity-100 hover:bg-white hover:text-black transition dely-70">
              Shop Now
            </button>
          </div>
        </div>
        <div className="group bg-black relative  h-[400px] w-full">
          <img
            src="/freelance-project/categoryImages/catImage1.jpg"
            className="h-[100%] w-[100%] bg-transparent hover:opacity-50"
            loading="lazy"
          />
          <div
            className="
            w-full flex justify-center items-end
          absolute opacity-0 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-50
          top-0 bottom-0 left-0
          right-0  transition delay-70
           ease-in pb-[30px]"
          >
            <button className="text-white border-2 border-white px-[15px] py-[10px] opacity-100 hover:bg-white hover:text-black transition dely-70">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
        <ProductSection heading={"Trending"} productArr={productArr} />
        <ProductSection heading={"Deals Of The Week"} productArr={productArr} />
        <ProductSection heading={"Beach Wears"} productArr={productArr} />
      </div>
    </div>
  );
};
