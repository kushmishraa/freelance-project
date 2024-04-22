import React from "react";
import { MainCraousel } from "../mainCarousel/MainCarousel";
import { ProductSection } from "../ProductSection/ProductSection";

export const LandingPage = () => {
  // populate products in the same structure or change your mapping accordingly.
  const productArr = [
    {
      productHeading: "Bulmer Tshirt",
      productBannerImage: "/freelance-project/productCatImages/tshirt1.webp",
      productTileImages: [
        "/freelance-project/productCatImages/tshirt1-2.webp",
        "/freelance-project/productCatImages/tshirt1-3.webp",
        "/freelance-project/productCatImages/tshirt1-4.webp",
      ],
    },
    {
      productHeading: "StormBorn",
      productBannerImage: "/freelance-project/productCatImages/tshirt2.webp",
      productTileImages: [
        "/freelance-project/productCatImages/tshirt2-1.webp",
        "/freelance-project/productCatImages/tshirt2-2.webp",
        "/freelance-project/productCatImages/tshirt2-3.webp",
      ],
    },
    {
      productHeading: "Bulmer Tshirt",
      productBannerImage: "/freelance-project/productCatImages/tshirt1.webp",
      productTileImages: [
        "/freelance-project/productCatImages/tshirt1-2.webp",
        "/freelance-project/productCatImages/tshirt1-3.webp",
        "/freelance-project/productCatImages/tshirt1-4.webp",
      ],
    },
    {
      productHeading: "StormBorn",
      productBannerImage: "/freelance-project/productCatImages/tshirt2.webp",
      productTileImages: [
        "/freelance-project/productCatImages/tshirt2-1.webp",
        "/freelance-project/productCatImages/tshirt2-2.webp",
        "/freelance-project/productCatImages/tshirt2-3.webp",
      ],
    },
  ];

  return (
    <div>
      {/* Banner carousel container */}
      <div className="">
        <MainCraousel />
      </div>
      {/* Banner carousel container */}

      {/* categories section */}
      <div className="flex flex-col sm:flex-row justify-center w-full gap-[30px] p-[20px] ">
        <div className="group bg-black relative  h-[400px] w-full">
          <img
            src="/freelance-project/categoryImages/catImage1.webp"
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
            src="/freelance-project/categoryImages/catImage2.webp"
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
            src="/freelance-project/categoryImages/catImage1.webp"
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
      {/* categories section */}

      {/* product section */}
      <div className="flex flex-col gap-[30px]">
        <ProductSection heading={"Trending"} productArr={productArr} />
        <ProductSection heading={"Deals Of The Week"} productArr={productArr} />
        <ProductSection heading={"Beach Wears"} productArr={productArr} />
      </div>
      {/* product section */}
    </div>
  );
};
