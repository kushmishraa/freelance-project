import React from "react";

import { Button, Paper } from "@mui/material";

import { ItemCard } from "./ItemCard";

export const CartItemComponent = (props) => {
  const { setStepperIndex } = props;

  const className = {
    carItemContainer: "w-full flex flex-col md:p-[25px]",
    cartItemDetailContainer: "p-[20px] flex flex-col gap-[20px] md:p-[25px]",
    deliveryAddressContainer:
      "hidden md:flex justify-between px-[20px] py-[10px] items-center",
    placeOrderContainer: "fixed left-0 bottom-0 w-full z-10 md:sticky",
    placeOrderBtn:
      "bg-sky-500 rounded px-[40px] py-[10px] text-white font-medium text-xl",
  };

  return (
    <>
      <div className={className.carItemContainer}>
        <div className={className.cartItemDetailContainer}>
          <Paper elevation={2} className={className.deliveryAddressContainer}>
            <h3>From Saved Addresses</h3>
            <Button>Enter Delivery Pincode</Button>
          </Paper>

          <Paper elevation={2}>
            <div className="flex flex-col gap-[25px] md:p-[20px]">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>

            <div className={className.placeOrderContainer}>
              <Paper
                elevation={4}
                className="w-full flex justify-between p-[18px] md:justify-end"
              >
                <div className="flex flex-col md:hidden">
                  <span className="font-medium">Price</span>
                  <span className="font-extrabold text-[18px]">₹1,244</span>
                </div>
                <div onClick={() => setStepperIndex(1)}>
                  <button className={className.placeOrderBtn}>
                    Place Order
                  </button>
                </div>
              </Paper>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};
