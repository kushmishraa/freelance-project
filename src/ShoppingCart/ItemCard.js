import React from "react";

export const ItemCard = () =>{
    return(
        <div className="w-full flex flex-col gap-[10px]  border-b-2 pb-[15px] last:border-b-0 ">
            <div className="w-full flex gap-[10px]">    
                    <div className="w-[140px] h-[140px] bg-black">
                        <img src="https://rukminim2.flixcart.com/image/224/224/xif0q/t-shirt/y/3/x/m-gucci-tshirt-sti-original-imagzuyecyqaehkt.jpeg?q=90" className="w-[100%] h-[100%] bg-cover"/>
                    </div>
                <div className="w-full">
                    <div className="flex justify-between">
                        <h3 className="font-normal text-[16px]">sti Printed Men Round Neck White, Black T-Shirt</h3>
                        <h3 className="font-normal text-[14px]">Delivery by Tue Apr 16 | <s className="font-medium text-gray-400">₹ 40</s> <span className="font-bold text-green-700">Free</span></h3>
                    </div>
                    <div>
                        <h3 className="font-normal text-gray-400">Size : M</h3>
                        <h3 className="font-normal text-gray-400">Seller:STIPVTLTD</h3>
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

            <div className="flex gap-[10px]">
                <div className="flex gap-[5px] w-[120px]">
                <button className="bg-white-800 border-[#c2c2c2] border-[1px] w-[28px] h-[28px] rounded-[50%] font-normal" disabled>-</button>
                <input type="text" className="border-[#c2c2c2] border-[1px] w-[50px] text-center" value={1}></input>
                <button className="border-[#c2c2c2] border-[1px] w-[28px] h-[28px] rounded-[50%] font-normal">+</button>
                </div>

                <div className="flex font-medium gap-[20px] text-lg">
                    <button className="hover:text-blue-700">Save For Later</button>
                    <button className="hover:text-blue-700">Remove</button>
                </div>
            </div>
        </div>
    )
}