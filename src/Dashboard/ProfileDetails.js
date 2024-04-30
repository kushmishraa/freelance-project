import { ArrowBack } from "@mui/icons-material";
import { Paper } from "@mui/material";
import React, { useState } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const ProfileDetails = (props) => {
    const { setTabToShow } = props;

    const [formState, setFormState] = useState({
        phoneNumber: "9999999999",
        gender: "Male"
    })
    return (
        <Paper elevation={2} className="border-[1px] p-[10px] border-gray-300">
            <div onClick={() => setTabToShow(0)}>
                <ArrowBack className="cursor-pointer" />
            </div>
            <div className="w-full flex flex-col gap-[15px] justify-center  h-full">
                <div className="p-[30px] border-b-[1px] border-gray-300">
                    <h2 className="text-xl font-bold">Profile Details</h2>
                </div>

                <div className="w-full p-[10px] border-[1px] border-gray-300">
                    <div className="text-gray-500 text-[12px]">Mobile Number*</div>
                    <div>
                        <h3>{formState.phoneNumber}</h3>
                    </div>
                </div>

                <div className="w-full border-[1px] border-gray-300 p-[10px]">
                    <input
                        placeholder="Email"
                        className="bg-inherit  outline-none w-full"
                    />
                </div>

                <div className="w-full flex *:cursor-pointer border-[1px] *:w-1/2 text-center *:p-[10px] border-gray-300 divide-x divide-black">
                    <div className="flex justify-center gap-[5px] items-center" onClick={() => setFormState({
                        ...formState,
                        gender: "Male"
                    })}>
                        <span>Male</span>
                        {formState.gender == "Male" && <span><CheckCircleOutlineIcon className="text-green-500" /></span>}
                    </div>
                    <div className="flex justify-center gap-[5px] items-center" onClick={() => setFormState({
                        ...formState,
                        gender: "Female"
                    })}>
                        <span>Female</span>
                        {formState.gender == "Female" && <span><CheckCircleOutlineIcon className="text-green-500" /></span>}
                    </div>
                </div>

                <div className="w-full border-[1px] border-gray-300 p-[10px]">
                    <input
                        placeholder="Birthday (dd/mm/yyyy)"
                        className="w-full outline-none bg-inherit"
                    />
                </div>

                <div>
                    <div>
                        <h2>Alternative mobile Details</h2>
                    </div>
                    <div className="w-full border-[1px] p-[10px] border-gray-300">
                        <input
                            placeholder="Mobile Number"
                            className="w-full bg-inherit outline-none h-full"
                            maxLength={10}
                        />
                    </div>
                </div>

                <div className="text-center px-[20px]">
                    <button className="w-full py-[15px] border-[1px] border-gray-300 hover:bg-black hover:text-white transition delay-70">
                        Save Details
                    </button>
                </div>
            </div>
        </Paper>
    );
};
