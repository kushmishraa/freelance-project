import React from "react";
import ReactStars from "react-rating-stars-component";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const ItemCardMobile = () =>{
    return(
        <div className="flex flex-col gap-[10px] border-b-[1px] border-gray-300 last:border-b-0 pb-[10px]">
            <div className="bg-green-200 w-[100px] rounded-sm flex items-center justify-center">
                <p className="text-green-900 font-normal">Hot Deal</p>
            </div>
        <div className="flex gap-[10px] ">
            <div className="flex flex-col gap-[5px] items-center">
                <div className="w-[110px] h-[110px]  justify-center bg-black">
                    <img src="https://rukminim2.flixcart.com/image/224/224/xif0q/t-shirt/y/3/x/m-gucci-tshirt-sti-original-imagzuyecyqaehkt.jpeg?q=90" className="w-[100%] h-[100%] bg-cover"></img>
                </div>
                <div>
                <select className="border-[1px] rounded-sm border-gray-400 px-[12px] py-[5px]">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>More</option>
                    </select>
                </div>
            </div>

            <div>
                <div className="">
                    <h3 className="font-normal">Dennis Lingo Men Stripped Casual Shirt</h3>
                </div>
                <div>
                    <p className="text-gray-500">Size: XL</p>
                </div>
                <div className="flex items-center gap-[3px]">
                    <ReactStars
                    count={5}
                    size={24}
                    value={4.5}
                    activeColor="#ffd700" />
                    <div className="text-gray-500">(100)</div>
                </div>
                <div className="flex gap-[5px]">
                    <div className="flex">
                        <ArrowDownwardIcon sx={{color:"#4CAF90"}}/>
                        <div><p className="text-green-700 font-bold">80%</p></div>
                    </div>
                    <div>
                        <s className="text-green-700 font-normal">₹2,499</s> <span className="font-bold text-lg">₹499</span>
                    </div>
                </div>
                <div className="text-[12px] text-green-700 font-extrabold">
                    <span>2 Offers Applied .</span>
                    <span>2 Offers Available</span>
                </div>
            </div>
            
        </div>

        <div className="flex border-b-[1px] items-center justify-between gap-[10px] py-[10px]">
            <span className="text-gray-600 text-[14px]">Delivery by FRI Apr 19 </span>
            <span className="flex gap-[5px]"><s className="text-gray-400">₹40</s><span className="text-green-700 font-normal">Free Delivery</span></span>
        </div>

        <div className="flex justify-between items-center divide-x ">
            <div className="flex w-full justify-center items-center py-[5px] px-[10px]"> 
                <DeleteOutlineIcon sx={{width:"30px" , height:"30px"}}/>
                <button className=" w-full">Remove</button>
            </div>
            <div className="flex w-full justify-center items-center  py-[5px] px-[10px]">
                <BookmarkIcon sx={{width:"30px" , height:"30px"}}/>
                <button className=" w-full">Save for Later</button>
            </div>
        </div>
        </div>
    )
}