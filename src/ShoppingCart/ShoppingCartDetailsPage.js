
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
             <Paper elevation={4} className=" w-full flex justify-center p-[10px]">
                 <button className="bg-[#fb641b] px-[56px] py-[10px] text-white font-medium text-xl">Place Order</button>
             </Paper>
             </div>}
            
        </div>
        </>
        
    )
}