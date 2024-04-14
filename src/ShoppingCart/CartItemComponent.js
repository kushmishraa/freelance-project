import { Button, Paper, TextField, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { ItemCard } from "./ItemCard";
import { ShoppingCartMobileComponent } from "./ShoppingCartMobile/ShoppingCartMobileComponent";

export const CartItemComponent = (props) =>{

    const{width} = props;

    return (
        <>
        {width == "small" ? 
            <ShoppingCartMobileComponent />
            :
         <div className="w-full flex flex-col p-[25px]">
         <div className="flex flex-col gap-[20px] p-[25px]">
             <Paper elevation={2}>
                 <div className="flex justify-between px-[20px] py-[10px] items-center">
                     <h3>From Saved Addresses</h3>
                     <Button>Enter Delivery Pincode</Button>
                 </div>
             </Paper>
         
             <Paper elevation={2}>
                 <div className="p-[20px] flex flex-col gap-[25px]">
                     <ItemCard />
                     <ItemCard />
                     <ItemCard />
                     <ItemCard />
                 </div>
 
             <div className="sticky bottom-0">       
             <Paper elevation={4} className=" w-full flex justify-end p-[18px]">
                 <button className="bg-[#fb641b] px-[56px] py-[10px] text-white font-medium text-xl">Place Order</button>
             </Paper>
             </div>

             </Paper>
         </div>
     </div>
        }
       
        </>
        
    )
}