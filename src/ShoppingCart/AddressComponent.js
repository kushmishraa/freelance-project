import { Dialog, DialogActions, DialogContent, DialogTitle, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export const AddressComponent = (props) => {

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
        allField: false,
    });

    const setAddressType = (e) => {
        e.target.classList.add("transiton");
        e.target.classList.add("delay-70");
        e.target.parentElement.childNodes.forEach((ele) => {
            ele.classList.remove("bg-black");
            ele.classList.remove("text-white");
            ele.classList.remove("scale-[1.1]")
        })
        e.target.classList.add("bg-black")
        e.target.classList.add("text-white")
        e.target.classList.add("scale-[1.1]")

        setLocalState({
            ...localState,
            addressType: e.target.value
        })
    }



    return (
        <div className="min-w-[70%] h-fit md:pt-[50px] md:px-[30px]">
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
            <Dialog
                open={openDialog}
                onClick={() => setOpenDialog(!openDialog)}
                maxWidth={false}
                fullWidth={true}

            >
                <div onClick={(e) => e.stopPropagation()} className="flex p-[10px] md:p-[20px]">
                    <div className="grow">
                        <h2 className="font-bold text-[18px]">Add Address</h2>
                    </div>
                    <button onClick={() => setOpenDialog(!openDialog)}><CloseIcon /></button>
                </div>

                <div onClick={(e) => e.stopPropagation()} className="w-full flex md:justify-center flex-1 p-[10px] items-center">
                    <div className="w-full flex flex-col gap-[10px]  p-[10px]">
                        <div className="flex flex-col md:flex-row gap-[10px]">
                            <div className="w-full md:w-1/2">
                                <TextField label="Name"
                                    variant="outlined" value={localState?.name}
                                    className="w-full"
                                    onChange={(e) => setLocalState({ ...localState, name: e.currentTarget.value })} />
                            </div>
                            <div className="w-full md:w-1/2">
                                <TextField
                                    className="w-full"
                                    label="Email"
                                    variant="outlined"
                                    value={localState?.email}
                                    onChange={(e) => setLocalState({ ...localState, email: e.currentTarget.value })} />
                            </div>
                        </div>

                        <div className="w-full md:flex-grow">
                            <TextField
                                className="w-full"
                                variant="outlined"
                                multiline
                                rows={3}
                                label="Address"
                                value={localState?.address}
                                onChange={(e) => setLocalState({ ...localState, address: e.currentTarget.value })} />
                        </div>

                        <div className="flex flex-col md:flex-row gap-[10px]">
                            <div className="md:w-1/2">
                                <TextField label="City"
                                    className="w-full"
                                    value={localState?.city}
                                    variant="outlined"
                                    onChange={(e) => setLocalState({ ...localState, city: e.currentTarget.value })} />
                            </div>
                            <div className="md:w-1/2">
                                <TextField
                                    variant="outlined"
                                    label="state"
                                    className="w-full"
                                    value={localState?.state}
                                    onChange={(e) => setLocalState({ ...localState, state: e.currentTarget.value })} />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-[10px]">
                            <div className="md:w-1/2">
                                <TextField
                                    variant="outlined"
                                    label="Pincode"
                                    className="w-full"
                                    value={localState?.pinCode}
                                    onChange={(e) => setLocalState({ ...localState, pinCode: e.currentTarget.value })} />
                            </div>
                            <div className="w-full md:w-1/2">
                                <TextField
                                    variant="outlined"
                                    label="Contact Number"
                                    value={localState?.number}
                                    className="w-full"
                                    onChange={(e) => setLocalState({ ...localState, number: e.currentTarget.value })} />
                            </div>
                        </div>

                        <div className=" flex transition delay-70 gap-[10px] *:border-[1px] *:border-gray-500 *:py-[2px] *:text-[12px] *:px-[10px] *:rounded *:cursor-pointer ">
                            <span onClick={(e) => setAddressType(e)}>HOME</span>
                            <span onClick={(e) => setAddressType(e)}>WORK</span>
                            <span onClick={(e) => setAddressType(e)}>OTHER</span>
                        </div>
                    </div>
                </div>

                <div>
                    <DialogActions >
                        <button onClick={() => {
                            setLocalState({ ...localState, allField: true })
                            setOpenDialog(!openDialog)
                        }} className="py-[10px] px-[15px] border-[1px]
                         border-black hover:bg-black hover:text-white">Add Address</button>
                    </DialogActions>
                </div>
            </Dialog>
        </div >
    )
}