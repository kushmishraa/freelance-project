import { Paper } from "@mui/material";
import React from "react";
import { WishlistCardComponent } from "../Components/WishlistCardComponent";
import { ArrowBack } from "@mui/icons-material";


export const Wishlist = (props) => {
    const { setTabToShow, navigate } = props;
    return (
        <Paper elevation={3}>
            <div onClick={() => {
                navigate('/dashboard')
                setTabToShow(0)
            }} className="p-[10px]">
                <ArrowBack className="cursor-pointer" />
            </div>

            <div className="p-[12px] flex gap-[5px] items-center">
                <h2 className="font-bold">Wishlist</h2>
                <span className="text-[12px] text-gray-500 font-bold"> / 6 Items</span>
            </div>

            <Paper className="flex gap-[10px] py-[10px] justify-center flex-wrap">
                <WishlistCardComponent />
                <WishlistCardComponent />
                <WishlistCardComponent />
                <WishlistCardComponent />
                <WishlistCardComponent />
            </Paper>

        </Paper>
    )
}