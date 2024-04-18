import React from "react";
import SlickCarousel from "../Components/SlickCarousel";

export const ProductSection = () => {
  return (
    <div className="w-full flex flex-col gap-[10px] p-[10px]">
      <div>
        <h2 className="text-2xl">Trending Deals</h2>
      </div>
      <div className="w-full h-[500px]">
        <SlickCarousel
          arrows={false}
          autoplay={true}
          slidesToShow={1}
          pauseOnHover={true}
          showDots={true}
        >
          <div
            className="max-w-[250px]
          min-w-[250px] bg-white rounded-lg p-[10px]"
          >
            <div className="group/productImage relative w-[200px] h-[300px]">
              <div className="w-[100%] h-[100%]">
                {/* <img
                  src="/freelance-project/productCatImages/product1.jpg"
                  className="max-w-[100%] h-[100%]"
                ></img> */}
              </div>

              <div
                className=" absolute w-full top-0 scale-0
               group-hover/productImage:scale-100
               max-h-[400px]"
              >
                <SlickCarousel
                  infinite={true}
                  autoplay={true}
                  pauseOnHover={false}
                  slidesToShow={1}
                  showDots={true}
                >
                  <div className="h-[300px]">
                    <img
                      src="/freelance-project/productCatImages/product2.jpg"
                      className="h-[50%]"
                    />
                  </div>
                  <div className="h-[300px]">
                    <img
                      src="/freelance-project/productCatImages/product3.jpg"
                      className="h-[50%]"
                    />
                  </div>
                </SlickCarousel>
              </div>
            </div>
            <div>
              <h2 className="font-bold">shirt 1</h2>
              <h2>12333</h2>
            </div>
          </div>
        </SlickCarousel>
      </div>
    </div>
  );
};
