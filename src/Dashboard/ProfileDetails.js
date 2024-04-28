import { ArrowBack } from "@mui/icons-material";
import React from "react";

export const ProfileDetails = (props) => {
    return (
        <div className="border-[1px] p-[10px] border-gray-300">
            <ArrowBack />
            <div className="w-full flex flex-col gap-[15px] justify-center  h-full">
                <div className="p-[30px] border-b-[1px] border-gray-300">
                    <h2 className="text-xl font-bold">Profile Details</h2>
                </div>

                <div className="w-full p-[10px] border-[1px] border-gray-300">
                    <div className="text-gray-500 text-[12px]">Mobile Number*</div>
                    <div>
                        <h3>9999999999</h3>
                    </div>
                </div>

                <div className="w-full border-[1px] border-gray-300 p-[10px]">
                    <input placeholder="Email" className="bg-inherit  outline-none w-full" />
                </div>

                <div className="w-full flex *:cursor-pointer border-[1px] *:w-1/2 text-center *:p-[10px] border-gray-300 divide-x divide-black">
                    <div>Male</div>
                    <div>Female</div>
                </div>

                <div className="w-full border-[1px] border-gray-300 p-[10px]">
                    <input placeholder="Birthday (dd/mm/yyyy)" className="w-full outline-none bg-inherit" />
                </div>
            </div>
        </div>
    )
}