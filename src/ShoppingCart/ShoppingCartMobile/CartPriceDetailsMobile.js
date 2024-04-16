import { Paper } from "@mui/material";
import React from "react";

export const CartPriceDetailsMobile = (props) => {
  const className = {
    priceDetailsMobileContainer: "sticky top-0 p-[10px]",
    priceDetailsBottomContainer:
      "p-[20px] flex justify-center items-center gap-[10px] w-full",
    priceDetailsHeading: "w-full p-[20px] border-b-2",
    priceDetails: "flex flex-col gap-[10px] p-[20px] border-b-2",
    totalAmtContainer: "flex p-[20px] border-b-2",
    totalSavingsContainer: "p-[20px] text-base",
  };

  return (
    <div className={className.priceDetailsMobileContainer}>
      <Paper elevation={2}>
        <div className={className.priceDetailsHeading}>
          <h3 className="font-medium text-[#878787]">PRICE DETAILS</h3>
        </div>

        <div className={className.priceDetails}>
          <div className="flex justify-between">
            <div>Price (4 items)</div>
            <div>₹5,496</div>
          </div>
          <div className="flex justify-between">
            <div>Discount</div>
            <div className="text-green-700">-₹4,252</div>
          </div>
          <div className="flex justify-between">
            <div>Delivery Charges</div>
            <div className="flex gap-[5px]">
              <s>₹120</s>
              <span className="text-green-700">Free</span>
            </div>
          </div>
        </div>

        <div className={className.totalAmtContainer}>
          <div className="w-full flex justify-between pt-[10px] pb-[10px]">
            <div className="font-bold text-lg">Total Amount</div>
            <div className="font-bold text-lg">₹1,244</div>
          </div>
        </div>

        <div className={className.totalSavingsContainer}>
          <h3 className="font-bold text-green-700">
            You will save ₹4,252 on this order
          </h3>
        </div>
      </Paper>

      <div className={className.priceDetailsBottomContainer}>
        <img
          src="/freelance-project/logo/security.png"
          className="w-[30px] h-[30px]"
        />
        <p className="text-gray-500">
          Safe and Secure Payments.Easy returns.100% Authentic products.
        </p>
      </div>
    </div>
  );
};
