import React from "react";

import { Paper } from "@mui/material";

import { CartItemComponent } from "./CartItemComponent";
import { CartPriceDetails } from "./CartPriceDetails";

export const ShoppingCartDetailsPage = (props) => {
  const { width } = props;
  const className = {
    cartDetailsPageContainer: "w-full flex max-md:flex-col",
    mobilePlaceOrderContainer: "sticky w-full bottom-0",
    placeOrderBtn:
      "bg-sky-500 rounded px-[40px] py-[10px] text-white font-medium text-xl",
  };

  return (
    <div className={className.cartDetailsPageContainer}>
      <CartItemComponent width={width} />
      <CartPriceDetails width={width} />

      {width == "small" && (
        <div className={className.mobilePlaceOrderContainer}>
          <Paper
            elevation={4}
            className="w-full justify-between items-center flex p-[10px]"
          >
            <div className="flex flex-col">
              <span className="font-medium">Price</span>
              <span className="font-extrabold text-[18px]">₹1,244</span>
            </div>
            <div>
              <button className={className.placeOrderBtn}>Place Order</button>
            </div>
          </Paper>
        </div>
      )}
    </div>
  );
};
