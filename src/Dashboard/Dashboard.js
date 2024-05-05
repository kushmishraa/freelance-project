import React, { useState } from "react";
import { ProfileSection } from "./ProfileSection";
import { ProfileDetails } from "./ProfileDetails";
import { Paper } from "@mui/material";
import { Orders } from "./Orders";
import { Address } from "./Address";
import { Wishlist } from "./Wishlisht";

export const Dashboard = () => {
  const [tabToShow, setTabToShow] = useState(0);

  // Dynamic tab rendering based on indices
  const sectionToShow = [
    <ProfileSection setTabToShow={setTabToShow} />,
    <ProfileDetails setTabToShow={setTabToShow} />,
    <Orders setTabToShow={setTabToShow} />,
    <Address setTabToShow={setTabToShow} />,
    <Wishlist setTabToShow={setTabToShow} />
  ];

  return (
    <div className="min-h-[100vh] py-[20px] w-[100%] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-[10px] w-full p-[7px] md:p-[0px] md:w-[70%]">
        <Paper
          elevation={2}
          className="hidden md:flex md:flex-col p-[10px] self-start w-full border-b-[1px] border-gray-400"
        >
          <h2 className="font-bold">Account</h2>
          <h3 className="text-gray-500">Username</h3>
        </Paper>

        <div className="flex gap-[10px]">
          <Paper
            elevation={2}
            className="hidden md:flex md:flex-col *:p-[20px] *:w-[200px] *:cursor-pointer 
            border-r-[1px] border-gray-300 
            *:border-b-[1px] *:border-gray-300
            h-fit"
          >
            <div className="*:p-[2px]">
              <h2 onClick={() => setTabToShow(0)}>Overview</h2>
            </div>

            <div className="*:p-[2px]">
              <h3 className="text-gray-500">Orders</h3>
              <h2 onClick={() => setTabToShow(2)}>Orders & Returns</h2>
            </div>

            <div className="*:p-[2px]">
              <h3 className="text-gray-500">Account</h3>
              <div>
                <h2 onClick={() => setTabToShow(1)}>Profile</h2>
                <h2 onClick={() => setTabToShow(3)}>Addresses</h2>
              </div>
            </div>

            <div className="*:p-[2px]">
              <h3 className="text-gray-500">LEGAL</h3>
              <div>
                <h2>Terms Of Use</h2>
                <h2>Privacy Policy</h2>
              </div>
            </div>
          </Paper>

          {/* main rendering area according to the tabs */}
          <div className="w-full h-full">{sectionToShow[tabToShow]}</div>
        </div>
      </div>
    </div>
  );
};
