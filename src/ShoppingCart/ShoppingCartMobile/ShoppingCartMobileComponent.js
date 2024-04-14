import { Paper } from "@mui/material";
import React from "react";
import { ItemCardMobile } from "./ItemCardMobile";

export const ShoppingCartMobileComponent = () =>{
    return(
        <div className="w-full flex flex-col gap-[20px] p-[10px]">
            <Paper elevation={2} className="w-full">
                <div className="flex py-[12px] px-[20px] justify-between">
                    <p>From Addresses</p>
                    <button className="text-blue-500">Enter Delivery Pincode</button>
                </div>
            </Paper>

            <Paper elevation={2} className="flex flex-col p-[10px] gap-[10px]">
                <ItemCardMobile />
                <ItemCardMobile />
                <ItemCardMobile />
                <ItemCardMobile />
            </Paper>

        </div>
    )
}