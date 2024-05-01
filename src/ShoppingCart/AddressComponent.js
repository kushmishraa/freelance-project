import { Paper } from "@mui/material";
import React from "react";

export const AddressComponent = (props) => {

    return (
        <div className="min-w-[70%] h-fit md:pt-[50px] md:px-[30px]">
            <Paper elevation={2} className="p-[10px]">
                <div className="flex justify-between p-[10px]">
                    <div>
                        <h2>Address Details</h2>
                    </div>
                    <div>
                        <button>ADD ADDRESS</button>
                    </div>
                </div>
            </Paper>
        </div>
    )
}