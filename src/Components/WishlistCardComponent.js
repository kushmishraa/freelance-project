import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const WishlistCardComponent = () => {

    const className = {
        wishlistCardContainer: "w-[200px] h-fit relative border-[1px] border-gray-400",
        productHeading: "font-bold text-ellipsis overflow-hidden whitespace-nowrap",
        cardButton: "w-full text-center py-[8px] px-[10px] border-t-[1px] border-gray-200"
    }

    return (
        <div className={className.wishlistCardContainer}>
            <div>
                <img src="/freelance-project/productCatImages/tshirt1.webp" />
            </div>

            <div className="p-[10px]">
                <div>
                    <h2 className={className.productHeading}>Bulmer Tshirt</h2>
                </div>
                <div className="flex gap-[5px]">
                    <span className="font-bold">₹1484</span><span className="text-gray-400"><s>₹2699</s></span><span className="text-green-700">(45% off )</span>
                </div>
            </div>

            <div>
                <button className={className.cardButton}>Move To Bag</button>
            </div>

            <div className="absolute cursor-pointer top-0 right-0 bg-gray-100 rounded-2xl m-[3px] p-[5px]">
                <DeleteOutlineIcon />
            </div>
        </div >
    )
}