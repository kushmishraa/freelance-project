import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export const ItemCard = () =>{
    return(
        <div className="w-full flex flex-col gap-[10px]  border-b-2 pb-[15px] last:border-b-0 ">
            <div className="w-full flex gap-[10px]">    
                    <div className="w-[140px] h-[140px] bg-black">
                        <img src="https://rukminim2.flixcart.com/image/224/224/xif0q/t-shirt/y/3/x/m-gucci-tshirt-sti-original-imagzuyecyqaehkt.jpeg?q=90" className="w-[100%] h-[100%] bg-cover"/>
                    </div>
                <div className="w-full flex flex-col gap-[10px]">
                    <div className="flex justify-between">
                        <h3 className="font-normal text-[16px]">sti Printed Men Round Neck White, Black T-Shirt</h3>
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <p>Size :</p>
                        <select className="px-[10px] py-[5px] border-[1px] border-gray-400">
                            <option>S</option>
                            <option>M</option>
                            <option>XL</option>
                            <option>XXl</option>
                        </select>
                    </div>

                    <div className="flex gap-[5px]">
                        <div>
                            <s className="font-light text-gray-400">₹999</s>
                        </div>
                        <div>
                            <h3 className="font-bold">₹299</h3>
                        </div>
                        <div>
                            <h3 className="font-bold text-green-700">81% off</h3>
                        </div>
                        <div>
                            <h3 className="font-bold text-green-700">2 offers applied</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex px-[15px] gap-[10px]">
                <div className="flex gap-[5px] w-[120px]">
                <select className="border-[1px] border-gray-400 px-[10px] py-[10px]">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>More</option>
                </select>    
                </div>

                <div className="flex font-medium gap-[20px] text-lg">
                    <button className="hover:text-blue-700">Move to Wishlist</button>
                    <button className="hover:text-blue-700">Remove</button>
                </div>
            </div>
        </div>
    )
}