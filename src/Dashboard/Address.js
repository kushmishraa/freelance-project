import { Paper } from "@mui/material";
import React, { useState } from "react";
import { AddressDialogComponent } from "../Components/AddressDialogComponent";
import { AddressCardComponent } from "./AddressCardComponent";
import { ArrowBack } from "@mui/icons-material";
import { dashboardIndexing } from "./constantForPageIndexing";

export const Address = (props) => {
    const { navigate, setTabToShow } = props;
    const [localState, setLocalState] = useState();
    const [openDialog, setOpenDialog] = useState(false);

    // list of addresses
    const arrOfAddress = [
        {
            name: "Kushagra Mishra",
            email: "mishrash64@gmail.com",
            addressType: "Home",
            default: true,
            address: "K-402 iris pune - 411006 maggarpatta maharashtra"
        },
        {
            name: "Kushagra Mishra",
            email: "mishrash64@gmail.com",
            addressType: "Home",
            default: false,
            address: "K-402 iris pune - 411006 maggarpatta maharashtra"
        },
        {
            name: "Kushagra Mishra",
            email: "mishrash64@gmail.com",
            addressType: "Home",
            default: false,
            address: "K-402 iris pune - 411006 maggarpatta maharashtra"
        },
        {
            name: "Kushagra Mishra",
            email: "mishrash64@gmail.com",
            addressType: "Home",
            default: false,
            address: "K-402 iris pune - 411006 maggarpatta maharashtra"
        }
    ]

    // default address on the basis of flag
    const defaultAddress = arrOfAddress.find((address) => {
        return address.default == true;
    })

    // other addresses rather than default address
    const otherAddress = arrOfAddress.filter((address) => {
        return address.default == false
    })


    return (
        <>
            <Paper className="p-[10px]">
                <div onClick={() => {
                    navigate("/dashboard")
                    setTabToShow(dashboardIndexing.dashboard)
                }} className="pb-[20px]">
                    <ArrowBack className="cursor-pointer" />
                </div>
                <div className="flex justify-between">
                    <div>
                        <h2 className="font-bold">Saved Addresses</h2>
                    </div>
                    <div>
                        <button className="py-[5px] px-[10px] border-[1px] border-gray-500 hover:bg-black hover:text-white transition delay-70"
                            onClick={() => setOpenDialog(!openDialog)}>+ Add Address</button>
                    </div>
                </div>

                <div className="p-[10px] flex flex-col gap-[5px] ">
                    <div>
                        <h3 className="text-[14px] font-bold">DEAFULT ADDRESS</h3>
                    </div>

                    <AddressCardComponent addressDetails={defaultAddress} />

                </div>

                <div className="p-[10px] flex flex-col gap-[5px] ">
                    <div>
                        <h3 className="text-[14px] font-bold">OTHER ADDRESSES</h3>
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        {otherAddress.map((addressDetails) => {
                            return <AddressCardComponent addressDetails={addressDetails} />
                        })}
                    </div >
                </div >
            </Paper >

            <AddressDialogComponent
                localState={localState}
                setLocalState={setLocalState}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog} />
        </>
    )
}