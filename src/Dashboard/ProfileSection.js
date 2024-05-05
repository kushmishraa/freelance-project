import { Paper } from "@mui/material";
import React from "react";

export const ProfileSection = (props) => {
  const { setTabToShow } = props;
  return (
    <Paper elevation={2} className="flex flex-col gap-[10px]">
      <div className="w-full bg-gray-200">
        <div className="w-full flex items-center h-[220px]">
          <div className="w-full flex justify-center md:justify-between p-[50px]">
            <div className="w-[120px] h-[120px]">
              <img
                src="/freelance-project/avatar/default-image.png"
                className="w-full h-full"
              />
            </div>
            <div className="hidden md:block">
              <button className="border-[1px] border-black py-[10px] px-[15px] bg-white">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-[10px] grid gap-4 md:grid-cols-3 md:grid-rows-2 md:grid-rows-[200px] *:h-[100px] md:*:h-[200px]  *:cursor-pointer  pt-[10px]">
        <div
          className="flex flex-col border-[1px] border-gray-300 items-center justify-center 
        hover:bg-gray-200"
          onClick={() => setTabToShow(2)}
        >
          <div className="w-[32px] h-[32px]">
            <img src="/freelance-project/assests/orders.png" />
          </div>
          <div className="text-center">
            <h2 className="font-bold">Orders</h2>
            <h3 className="text-gray-500 text-[12px]">
              Check your order status
            </h3>
          </div>
        </div>

        <div className="flex flex-col border-[1px] border-gray-300 items-center justify-center hover:bg-gray-200"
          onClick={() => setTabToShow(4)}>
          <div className="w-[32px] h-[32px]">
            <img src="/freelance-project/assests/wishlist.png" />
          </div>
          <div className="text-center">
            <h2 className="font-bold">Wishlist</h2>
            <h3 className="text-gray-500 text-[12px]">
              All your Curated Products collection
            </h3>
          </div>
        </div>

        <div className="flex flex-col border-[1px] border-gray-300 items-center 
        justify-center hover:bg-gray-200"
          onClick={() => setTabToShow(3)}>
          <div className="w-[32px] h-[32px]">
            <img src="/freelance-project/assests/address.png" />
          </div>
          <div className="text-center">
            <h2 className="font-bold">Address</h2>
            <h3 className="text-gray-500 text-[12px]">
              Save address for hassel-free checkouts
            </h3>
          </div>
        </div>

        <div className="flex flex-col border-[1px] border-gray-300 items-center justify-center 
        hover:bg-gray-200"  onClick={() => setTabToShow(1)}>
          <div className="w-[32px] h-[32px]">
            <img src="/freelance-project/assests/details.png" />
          </div>
          <div className="text-center">
            <h2 className="font-bold">Profile Details</h2>
            <h3 className="text-gray-500 text-[12px]">
              Change your profile details
            </h3>
          </div>
        </div>
      </div>

      <div className="p-[10px]">
        <button className="w-full md:w-[215px] bg-red-500 text-white font-bold py-[10px] px-[15px]">
          LOGOUT
        </button>
      </div>
    </Paper>
  );
};
