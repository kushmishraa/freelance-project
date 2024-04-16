import React from "react";

export const ItemCard = () => {
  const className = {
    itemCardContainer:
      "w-full flex flex-col gap-[10px]  border-b-2 pb-[15px] last:border-b-0 ",
    itemCardDetailsContainer: "w-full flex gap-[10px]",
    itemImageContainer: "w-[140px] h-[140px] bg-black",
    itemDetailsBox: "w-full flex flex-col gap-[10px]",
    itemSizeContainer: "flex items-center gap-[5px]",
    offerContainer: "flex gap-[5px]",
    itemCardBottomContainer: "flex px-[15px] gap-[10px]",
    itemCardActionBtn: "flex font-medium gap-[20px] text-lg",
  };

  return (
    <div className={className.itemCardContainer}>
      <div className={className.itemCardDetailsContainer}>
        <div className={className.itemImageContainer}>
          <img
            src="https://rukminim2.flixcart.com/image/224/224/xif0q/t-shirt/y/3/x/m-gucci-tshirt-sti-original-imagzuyecyqaehkt.jpeg?q=90"
            className="w-[100%] h-[100%] bg-cover"
          />
        </div>
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
        </div>
      </div>

      <div className={className.itemCardBottomContainer}>
        <div className="flex gap-[5px] w-[120px]">
          <select className="border-[1px] border-gray-400 px-[10px] py-[10px]">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>More</option>
          </select>
        </div>

        <div className={className.itemCardActionBtn}>
          <button className="hover:text-blue-700">Move to Wishlist</button>
          <button className="hover:text-blue-700">Remove</button>
        </div>
      </div>
    </div>
  );
};
