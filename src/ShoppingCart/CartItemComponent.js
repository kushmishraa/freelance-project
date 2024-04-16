import React from "react";

import { Button, Paper } from "@mui/material";

import { ItemCard } from "./ItemCard";
import { ShoppingCartMobileComponent } from "./ShoppingCartMobile/ShoppingCartMobileComponent";

export const CartItemComponent = (props) => {
  const { width } = props;
  const className = {
    carItemContainer: "w-full flex flex-col p-[25px]",
    cartItemDetailContainer: "flex flex-col gap-[20px] p-[25px]",
    deliveryAddressContainer:
      "flex justify-between px-[20px] py-[10px] items-center",
    placeOrderContainer: "sticky bottom-0",
    placeOrderBtn:
      "bg-[#fb641b] px-[56px] py-[10px] text-white font-medium text-xl",
  };

  return (
    <>
      {width == "small" ? (
        <ShoppingCartMobileComponent />
      ) : (
        <div className={className.carItemContainer}>
          <div className={className.cartItemDetailContainer}>
            <Paper elevation={2} className={className.deliveryAddressContainer}>
              <h3>From Saved Addresses</h3>
              <Button>Enter Delivery Pincode</Button>
            </Paper>

            <Paper elevation={2}>
              <div className="p-[20px] flex flex-col gap-[25px]">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
              </div>

              <div className={className.placeOrderContainer}>
                <Paper
                  elevation={4}
                  className=" w-full flex justify-end p-[18px]"
                >
                  <button className={className.placeOrderBtn}>
                    Place Order
                  </button>
                </Paper>
              </div>
            </Paper>
          </div>
        </div>
      )}
    </>
  );
};
