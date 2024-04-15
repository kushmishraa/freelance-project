import { Paper } from "@mui/material";
import React from "react";
import { ItemCardMobile } from "./ItemCardMobile";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


export const ShoppingCartMobileComponent = () =>{
    const steps = ["My Bag" , "Address" , "Payment"]
    return(
        <>
        <div className="w-full py-[10px] sticky top-0 bg-white z-10">
            <Stepper activeStep={0} alternativeLabel className="py-[5px] w-full">
                {steps.map((label) => (
                    <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
            </Stepper>
        </div>

        <div className="w-full flex flex-col gap-[20px] p-[10px]">
            {/* <Paper elevation={1} className="w-full">
                <div className="flex py-[12px] px-[20px] justify-between">
                    <p>From Addresses</p>
                    <button className="text-sky-600">Enter Delivery Pincode</button>
                </div>
            </Paper> */}
           

            <Paper elevation={1} className="flex flex-col p-[10px] gap-[10px]">
                <ItemCardMobile />
                <ItemCardMobile />
                <ItemCardMobile />
                <ItemCardMobile />
            </Paper>

        </div>
        </>
    )
}