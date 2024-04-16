import React from "react";
import ReactStars from "react-rating-stars-component";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const ItemCardMobile = () => {
  const className = {
    itemCardMobileContainer:
      "flex flex-col gap-[10px] border-b-[1px] border-gray-300 last:border-b-0 pb-[10px]",
    hotDealsContainer:
      "bg-green-300 w-[100px] rounded flex items-center justify-center",
    itemCardDetailsContaier: "flex gap-[10px] border-b-[1px] py-[10px] ",
    itemCardDetailsLeft: "flex flex-col gap-[10px] items-center",
    itemImageContainer: "w-[110px] h-[110px]  justify-center bg-black",
    itemQtyContainer: "",
    itemDetails: "flex flex-col w-full",
    itemHeadingContianer: "",
    itemSizeContainer: "flex items-center gap-[5px] py-[10px]",
    reviewRatingContainer: "flex justify-end items-center z-2",
    discountContainer: "flex justify-end gap-[5px]",
    offersContainer:
      "text-[12px] flex gap-[5px] text-green-700 justify-end font-extrabold",
    itemActionBtn: "flex justify-between items-center divide-x ",
  };

  return (
    <div className={className.itemCardMobileContainer}>
      <div className={className.hotDealsContainer}>
        <p className="text-green-800 font-normal italic">Hot Deal</p>
      </div>
      <div className={className.itemCardDetailsContaier}>
        <div className={className.itemCardDetailsLeft}>
          <div className={className.itemImageContainer}>
            <img
              src="https://rukminim2.flixcart.com/image/224/224/xif0q/t-shirt/y/3/x/m-gucci-tshirt-sti-original-imagzuyecyqaehkt.jpeg?q=90"
              className="w-[100%] h-[100%] bg-cover"
            ></img>
          </div>
          <div className={className.itemQtyContainer}>
            <select className="border-[1px] *:text-center rounded-sm border-gray-400 px-[12px] py-[5px]">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>More</option>
            </select>
          </div>
        </div>

        <div className={className.itemDetails}>
          <div className={className.itemHeadingContianer}>
            <h3 className="font-normal">
              Dennis Lingo Men Stripped Casual Shirt
            </h3>
          </div>
          <div className={className.itemSizeContainer}>
            <p className="text-gray-700 font-medium">Size :</p>
            <select className="border-[1px] *:text-center border-gray-400 px-[5px] py-[2px]">
              <option>S</option>
              <option>M</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>

          <div className={className.reviewRatingContainer}>
            <ReactStars
              count={5}
              size={24}
              value={4.5}
              edit={false}
              activeColor="#ffd700"
            />
            <div className="text-gray-800">(100)</div>
          </div>

          <div className={className.discountContainer}>
            <div className="flex items-center">
              <ArrowDownwardIcon sx={{ color: "#4CAF90" }} />
              <p className="text-green-700 font-bold">80%</p>
            </div>
            <div>
              <s className="text-green-700 font-normal">₹2,499</s>{" "}
              <span className="font-bold text-lg">₹499</span>
            </div>
          </div>
          <div className={className.offersContainer}>
            <span>2 Offers Applied</span>
            <span>2 Offers Available</span>
          </div>
        </div>
      </div>

      <div className={className.itemActionBtn}>
        <div className="flex w-full  py-[5px] px-[10px]">
          <button className=" w-full font-bold">Remove</button>
        </div>
        <div className="flex w-full  py-[5px] px-[10px]">
          <button className=" w-full font-bold">Move to Wishlist</button>
        </div>
      </div>
    </div>
  );
};
