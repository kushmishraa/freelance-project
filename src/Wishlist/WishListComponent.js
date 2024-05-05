import React from "react";
import { WishlistCardComponent } from "../Components/WishlistCardComponent";
import { Paper } from "@mui/material";

export const WishlishtComponent = () => {
    return (
        <Paper elevation={3} className="flex flex-col py-[20px] gap-[10px]">
            <div className="flex flex-col p-[20px]">
                <h2 className="font-bold">My Wishlist</h2>
                <h2 className="font-normal text-gray-500">6 items</h2>
            </div>
            <div elevation={3} className="min-h-screen flex gap-[20px] justify-center flex-wrap">
                <WishlistCardComponent />
                <WishlistCardComponent />
                <WishlistCardComponent />
            </div>
        </Paper>
    )
}