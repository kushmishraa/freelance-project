import React from "react";
import ReactStars from "react-rating-stars-component";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const ItemCard = () => {
  const className = {
    itemCardContainer:
      "w-full flex flex-col gap-[10px]  border-b-2 pb-[15px] last:border-b-0 ",
    itemCardLeftSection: "flex flex-col gap-[10px] items-center",
    itemImageContainer: "w-[140px] h-[140px] bg-black",
    itemDetailsBox: "w-full flex flex-col gap-[10px]",
    itemSizeContainer: "flex items-center gap-[5px]",
    offerContainer: "hidden  md:w-full flex gap-[5px] md:flex",
    itemCardDetailContainer: "w-full flex flex-col px-[15px] gap-[10px]",
    itemCardActionBtn:
      "flex justify-center font-medium gap-[20px] text-lg w-full",
    reviewRatingContainer: "flex justify-end items-center z-2 md:hidden",
    discountContainer: "flex justify-end gap-[5px] md:hidden",
    offersContainer:
      "text-[12px] flex flex-col items-end sm:gap-[5px] text-green-700 sm:flex sm:flex-row sm:justify-end font-extra bold md:hidden",
    hotDealsContainer:
      "bg-green-300 w-[100px] rounded flex items-center justify-center",
    itemActionBtn: "flex justify-between items-center divide-x ",
  };

  return (
    <div className={className.itemCardContainer}>
      <div className={className.hotDealsContainer}>
        <p className="text-green-800 font-normal italic">Hot Deal</p>
      </div>
      <div className="flex border-b-[1px] pb-[15px] md:border-0 md:pb-[0px] last:border-b-0">
        <div className={className.itemCardLeftSection}>
          <div className={className.itemImageContainer}>
            <img
              src="https://rukminim2.flixcart.com/image/224/224/xif0q/t-shirt/y/3/x/m-gucci-tshirt-sti-original-imagzuyecyqaehkt.jpeg?q=90"
              className="w-[100%] h-[100%] bg-cover"
            />
          </div>
          <select className="w-[120px] border-[1px] border-gray-400 px-[10px] py-[10px]">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>More</option>
          </select>
        </div>

        <div className={className.itemCardDetailContainer}>
          <div className={className.itemDetailsBox}>
            <div>
              <h3 className="font-normal text-[16px]">
                sti Printed Men Round Neck White, Black T-Shirt
              </h3>
            </div>
            <div className={className.itemSizeContainer}>
              <p>Size :</p>
              <select className="px-[10px] py-[5px] border-[1px] border-gray-400">
                <option>S</option>
                <option>M</option>
                <option>XL</option>
                <option>XXl</option>
              </select>
            </div>

            <div className={className.offerContainer}>
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
      </div>
      <div className={className.itemActionBtn}>
        <div className="flex w-full  py-[5px] px-[10px]">
          <button className=" w-full font-bold">Move To Wishlist</button>
        </div>
        <div className="flex w-full  py-[5px] px-[10px]">
          <button className=" w-full font-bold">Remove</button>
        </div>
      </div>
    </div>
  );
};
