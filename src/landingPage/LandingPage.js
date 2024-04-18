import React from "react";
import { MainCraousel } from "../mainCarousel/MainCarousel";

export const LandingPage = () => {
  return (
    <div>
      <div className="">
        <MainCraousel />
      </div>
      <div className="flex justify-center gap-[30px] p-[20px] h-[400px]">
        <div className="group bg-black min-w-[400px] relative max-w-[400px] ">
          <img
            src="/freelance-project/categoryImages/dessert.jpg"
            className="max-h-full w-full bg-transparent hover:opacity-50 "
          />
          <div
            className="
            w-full flex justify-center items-center
          absolute opacity-0 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-50
          top-0 bottom-0 left-0
          right-0  transition delay-75 duration-300
           ease-in"
          >
            <button className="text-white bg-sky-500 px-[15px] py-[10px] opacity-100">
              Shop Now
            </button>
          </div>
        </div>
        <div className="group bg-black min-w-[400px] relative max-w-[400px] ">
          <img
            src="/freelance-project/categoryImages/dessert.jpg"
            className="max-h-full w-full bg-transparent hover:opacity-50 "
          />
          <div
            className="
            w-full flex justify-center items-center
          absolute opacity-0 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-50
          top-0 bottom-0 left-0
          right-0  transition delay-75 duration-300
           ease-in"
          >
            <button className="text-white bg-sky-500 px-[15px] py-[10px] opacity-100">
              Shop Now
            </button>
          </div>
        </div>
        <div className="group bg-black min-w-[400px] relative max-w-[400px] ">
          <img
            src="/freelance-project/categoryImages/dessert.jpg"
            className="max-h-full w-full bg-transparent hover:opacity-50 "
          />
          <div
            className="
            w-full flex justify-center items-center
          absolute opacity-0 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-50
          top-0 bottom-0 left-0
          right-0  transition delay-75 duration-300
           ease-in"
          >
            <button className="text-white bg-sky-500 px-[15px] py-[10px] opacity-100">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
