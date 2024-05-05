import { Paper } from "@mui/material";
import React from "react";

export const AddressCardComponent = (props) => {

    const { addressDetails } = props;

    return (
        <>
            <Paper elevation={2}>
                <div className="p-[10px] flex flex-col gap-[10px]">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold">Kushagra Mishra</h2>
                        <h2 className="bg-gray-200 py-[5px] font-bold px-[10px] rounded-2xl text-[12px]">HOME</h2>
                    </div>

                    <div className="*:text-gray-500 *:text-[12px]">
                        <h3>K-402 Iris</h3>
                        <h3>Maggarpatta</h3>
                        <h3>Pune-411013</h3>
                        <h3>Maharashtra</h3>
                    </div>

                    <div>
                        <h3 className="text-gray-500 text-[12px]">Mobile : 1234567899</h3>
                    </div>
                </div>

                <div className="flex *:text-center *:grow *:py-[10px] *:px-[10px] border-[1px] border-gray-300 divide-x divide-black">
                    <div>
                        <button>EDIT</button>
                    </div>
                    <div>
                        <button>REMOVE</button>
                    </div>
                </div>
            </Paper>
        </>
    )
}