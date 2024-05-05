import { Dialog, DialogActions, TextField } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

export const AddressDialogComponent = (props) => {

    const { setOpenDialog, localState, openDialog, setLocalState, } = props;

    // holds error for particular form values
    const [errorState, setErrorState] = useState({
        name: {
            error: false,
            errorMsg: "Please Enter Correct Name"
        },
        email: {
            error: false,
            errorMsg: "Please Enter Correct Email"
        },
        number: {
            error: false,
            errorMsg: "Incorrect Mobile Number"
        },
        address: {
            error: false,
            errorMsg: "Please Enter Correct Address"
        },
        city: {
            error: false,
            errorMsg: "Please Enter City"
        },
        pinCode: {
            error: false,
            errorMsg: "Please Enter Correct Pincode"
        },
        state: {
            error: false,
            errorMsg: "Please Select Your State"
        }
    })

    // set what type of address is
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

    // function to checks all form values
    const checkForErrors = (e) => {

        let tempError = errorState;
        let errorCnt = 2;
        let formValues = Object.keys(localState);

        for (let formValue of formValues) {
            if (localState[formValue]?.length === 0) {
                tempError = {
                    ...tempError,
                    [formValue]: {
                        ...tempError[formValue],
                        error: true
                    }
                }
                errorCnt += 1;
            }
            else {
                if (formValue == "number") {
                    if (localState[formValue].length < 10) {
                        tempError = {
                            ...tempError,
                            [formValue]: {
                                error: true,
                                errorMsg: "Please Enter Valid Number"
                            }
                        }
                        errorCnt += 1;
                    }
                }
                else if (formValue == "pinCode") {
                    if (localState[formValue].length < 6) {
                        tempError = {
                            ...tempError,
                            [formValue]: {
                                error: true,
                                errorMsg: "Please Enter Valid Pincode"
                            }
                        }
                        errorCnt += 1;
                    }
                }
                else {
                    tempError = {
                        ...tempError,
                        [formValue]: {
                            ...tempError[formValue],
                            error: false
                        }
                    }
                    errorCnt > 2 && (errorCnt = errorCnt - 1);
                }
            }
        }

        // Object.keys(localState).map((formValues) => {
        //     localState[formValues].length === 0 ?
        //         (tempError = {
        //             ...tempError,
        //             [formValues]: {
        //                 ...tempError[formValues],
        //                 error: true
        //             }
        //         }) && (errorCnt++)
        //         :
        //         (tempError = {
        //             ...tempError,
        //             [formValues]: {
        //                 ...tempError[formValues],
        //                 error: false
        //             }
        //         }) && (errorCnt > 0 && errorCnt--)
        // })
        setErrorState(tempError);
        if (errorCnt == 2) {
            setLocalState({ ...localState, allField: true })
            setOpenDialog(!openDialog)
        }
    }


    return (
        <>
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
                                <TextField
                                    error={errorState.name.error}
                                    helperText={errorState.name.error && errorState.name.errorMsg}
                                    label="Name"
                                    variant="outlined" value={localState?.name}
                                    className="w-full"
                                    onChange={(e) => setLocalState({ ...localState, name: e.currentTarget.value })} />
                            </div>
                            <div className="w-full md:w-1/2">
                                <TextField
                                    error={errorState.email.error}
                                    helperText={errorState.email.error && errorState.email.errorMsg}
                                    className="w-full"
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    value={localState?.email}
                                    onChange={(e) => setLocalState({ ...localState, email: e.currentTarget.value })} />
                            </div>
                        </div>

                        <div className="w-full md:flex-grow">
                            <TextField
                                error={errorState.address.error}
                                helperText={errorState.address.error && errorState.address.errorMsg}
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
                                <TextField
                                    label="City"
                                    error={errorState.city.error}
                                    helperText={errorState.city.error && errorState.city.errorMsg}
                                    className="w-full"
                                    value={localState?.city}
                                    variant="outlined"
                                    onChange={(e) => setLocalState({ ...localState, city: e.currentTarget.value })} />
                            </div>
                            <div className="md:w-1/2">
                                <TextField
                                    error={errorState.state.error}
                                    helperText={errorState.state.error && errorState.state.errorMsg}
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
                                    error={errorState.pinCode.error}
                                    helperText={errorState.pinCode.error && errorState.pinCode.errorMsg}
                                    variant="outlined"
                                    label="Pincode"
                                    className="w-full"
                                    value={localState?.pinCode}
                                    onChange={(e) => {
                                        e.target.value.length <= 6 && setLocalState({ ...localState, pinCode: e.currentTarget.value })
                                    }} />
                            </div>
                            <div className="w-full md:w-1/2">
                                <TextField
                                    error={errorState.number.error}
                                    helperText={errorState.number.error && errorState.number.errorMsg}
                                    variant="outlined"
                                    label="Contact Number"
                                    value={localState?.number}
                                    className="w-full"
                                    onChange={(e) => {
                                        e.target.value.length <= 10
                                            && setLocalState({ ...localState, number: e.currentTarget.value })
                                    }} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-[10px] items-center">
                            <div className=" flex transition delay-70 gap-[10px] *:border-[1px] *:border-gray-500 *:py-[2px] *:text-[12px] *:px-[10px] *:rounded *:cursor-pointer ">
                                <span onClick={(e) => setAddressType(e)}>HOME</span>
                                <span onClick={(e) => setAddressType(e)}>WORK</span>
                                <span onClick={(e) => setAddressType(e)}>OTHER</span>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <input type="checkbox" className="w-[15px] h-[15px]" checked={localState?.defaultAddress}
                                    onChange={() => setLocalState({
                                        ...localState,
                                        defaultAddress: !localState?.defaultAddress
                                    })} />
                                <h3 className="font-bold">Default Address ?</h3>
                            </div>
                        </div>

                    </div>
                </div>

                <div onClick={(e) => e.stopPropagation()}>
                    <DialogActions >
                        <button onClick={() => {
                            checkForErrors()
                        }} className="py-[10px] px-[15px] border-[1px]
                 border-black hover:bg-black hover:text-white">Add Address</button>
                    </DialogActions>
                </div>
            </Dialog>
        </>
    )
}