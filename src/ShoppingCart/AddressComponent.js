import { Paper } from "@mui/material";
import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { AddressDialogComponent } from "../Components/AddressDialogComponent";
export const AddressComponent = (props) => {
    const { setStepperIndex } = props;
    const [openDialog, setOpenDialog] = useState(false);
    const [localState, setLocalState] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pinCode: "",
        number: "",
        addressType: "",
        defaultAddress: false,
        allField: false,
    });

    const className = {
        placeOrderContainer: "fixed left-0 bottom-0 w-full z-10 md:sticky",
        placeOrderBtn:
            "bg-sky-500 rounded px-[40px] py-[10px] text-white font-medium text-xl",
    }


    return (
        <div className="min-w-[70%] relative h-fit md:pt-[50px] md:px-[30px]">
            <Paper elevation={2} className="p-[10px]">
                <div className="flex items-center justify-between p-[10px]">
                    <div>
                        <h2 className="font-bold">Address Details</h2>
                    </div>
                    <div>
                        <button className="py-[5px] px-[10px] border-[1px] 
                        border-black rounded
                        hover:bg-black hover:text-white
                        transition delay-70" onClick={() => setOpenDialog(!openDialog)}>ADD ADDRESS</button>
                    </div>
                </div>

                {/* new address gets added below if all fields are Correct */}
                {
                    localState.allField &&
                    <Paper elevation={3}>
                        <div className="flex p-[10px]">
                            <div className="grow p-[10px]">
                                <h2 className="font-bold">{localState?.name}</h2>
                                <h3 className="text-gray-600">{localState?.email}</h3>
                                <h3 className="text-gray-600">{localState?.address}</h3>
                            </div>
                            <div className="flex items-center gap-[5px] p-[10px]">
                                <input type="checkbox" className="w-[20px] h-[20px]" />
                                <div onClick={() => setLocalState({ allField: false })}>
                                    <DeleteOutlineIcon sx={{ width: "30px", height: "30px" }} />
                                </div>

                            </div>
                        </div>
                    </Paper>
                }
            </Paper>

            <div className={className.placeOrderContainer}>
                <Paper
                    elevation={4}
                    className="w-full flex justify-between p-[18px] md:justify-end"
                >
                    <div className="flex flex-col md:hidden">
                        <span className="font-medium">Price</span>
                        <span className="font-extrabold text-[18px]">₹1,244</span>
                    </div>
                    <div onClick={() => setStepperIndex(2)}>
                        <button className={className.placeOrderBtn}>
                            Place Order
                        </button>
                    </div>
                </Paper>
            </div>

            {/* popup to add new address */}
            <AddressDialogComponent
                localState={localState}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                setLocalState={setLocalState} />
        </div >
    )
}