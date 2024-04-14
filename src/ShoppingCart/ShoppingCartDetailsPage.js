import { Button, Paper } from "@mui/material";
import React from "react";
import { CartItemComponent } from "./CartItemComponent";
import { CartPriceDetails } from "./CartPriceDetails";
;

export const ShoppingCartDetailsPage = () =>{
    return(
        <div className="w-full flex">
            <CartItemComponent />
            <CartPriceDetails />
        </div>
    )
}