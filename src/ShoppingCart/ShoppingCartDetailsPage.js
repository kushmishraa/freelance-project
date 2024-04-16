import React from "react";

import { Paper, Step, StepLabel, Stepper } from "@mui/material";

import { CartItemComponent } from "./CartItemComponent";
import { CartPriceDetails } from "./CartPriceDetails";

export const ShoppingCartDetailsPage = (props) => {
  const className = {
    mobileStepperContainer:
      "w-full py-[10px] sticky top-0 bg-white z-10 md:hidden",
    cartDetailsPageContainer: "w-full flex max-md:flex-col",
    mobilePlaceOrderContainer: "sticky w-full bottom-0",
    placeOrderBtn:
      "bg-sky-500 rounded px-[40px] py-[10px] text-white font-medium text-xl",
  };
  const steps = ["My Bag", "Address", "Payment"];

  return (
    <>
      <div className={className.mobileStepperContainer}>
        <Stepper activeStep={0} alternativeLabel className="py-[5px] w-full">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      <div className={className.cartDetailsPageContainer}>
        <CartItemComponent />
        <CartPriceDetails />
      </div>
    </>
  );
};
