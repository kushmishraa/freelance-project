import React from "react";

import { Paper } from "@mui/material";
import { ItemCardMobile } from "./ItemCardMobile";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export const ShoppingCartMobileComponent = () => {
  const steps = ["My Bag", "Address", "Payment"];
  const className = {
    mobileStepperContainer: "w-full py-[10px] sticky top-0 bg-white z-10",
    cartMobileDetailsContainer: "w-full flex flex-col gap-[20px] p-[10px]",
  };
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

      <div className={className.cartMobileDetailsContainer}>
        <Paper elevation={1} className="flex flex-col p-[10px] gap-[10px]">
          <ItemCardMobile />
          <ItemCardMobile />
          <ItemCardMobile />
          <ItemCardMobile />
        </Paper>
      </div>
    </>
  );
};
