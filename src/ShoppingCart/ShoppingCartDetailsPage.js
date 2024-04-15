
import React from "react";
import { CartItemComponent } from "./CartItemComponent";
import { CartPriceDetails } from "./CartPriceDetails";
import { Paper } from "@mui/material";

export const ShoppingCartDetailsPage = (props) =>{

    const {width} = props;

    return(
        <>
        <div className="w-full flex max-md:flex-col">
            <CartItemComponent width={width}/>
            <CartPriceDetails width={width}/>
            
            {width == "small" && 
            <div className="sticky w-full bottom-0">       
             <Paper elevation={4} className="w-full justify-between items-center flex p-[10px]">
                <div className="flex flex-col">
                    <span className="font-medium">Price</span>
                    <span className="font-extrabold text-[18px]">₹1,244</span>
                </div>
                <div>
                 <button className="bg-sky-500 rounded px-[40px] py-[10px] text-white font-medium text-xl">Place Order</button>
                </div>
             </Paper>
             </div>}
            
        </div>
        </>
        
    )
}