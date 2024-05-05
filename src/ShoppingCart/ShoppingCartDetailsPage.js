import React, { useState } from "react";

import { Paper, Step, StepLabel, Stepper } from "@mui/material";

import { CartItemComponent } from "./CartItemComponent";
import { CartPriceDetails } from "./CartPriceDetails";
import { AddressComponent } from "./AddressComponent";

export const ShoppingCartDetailsPage = (props) => {
  const className = {
    mobileStepperContainer:
      "w-full py-[10px] sticky top-0 bg-white z-10",
    cartDetailsPageContainer: "w-full mt-[5px] md:mt-[0px] md:min-w-[70%] flex max-md:flex-col",
    mobilePlaceOrderContainer: "sticky w-full bottom-0",
    placeOrderBtn:
      "bg-sky-500 rounded px-[40px] py-[10px] text-white font-medium text-xl",
  };
  const steps = ["My Bag", "Address", "Payment"];
  const [stepperIndex, setStepperIndex] = useState(0)

  return (
    <>
      <div className={className.mobileStepperContainer}>
        <Stepper activeStep={stepperIndex} alternativeLabel className="py-[5px] w-full">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      <div className={className.cartDetailsPageContainer}>
        {stepperIndex == 0 && <CartItemComponent setStepperIndex={setStepperIndex} />}
        {stepperIndex == 1 && <AddressComponent setStepperIndex={setStepperIndex} />}
        <CartPriceDetails />
      </div>
    </>
  );
};
