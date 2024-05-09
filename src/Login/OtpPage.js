import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const OtpPage = (props) => {
    const { backToLogin } = props;
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState();

    const sendOtpTimer = () => {
        let time = 5;
        const interval = setInterval(() => {
            if (time == 0) {
                clearInterval(interval);
            }
            else {
                setTimer(time - 1);
                time = time - 1;
            }

        }, 1000);
    }

    const className = {
        otpContainer: "h-full flex flex-col justify-center px-[50px] ",
        otpFormContaner: "flex flex-col gap-[20px] "
    }

    useEffect(() => {
        sendOtpTimer();
    }, []);


    const handleInput = (e, index) => {

        // filling otp according to their index
        let tempOtp = otp;
        tempOtp[index] = e.target.value;
        setOtp(tempOtp);
        let auotFocusIndex = -1;
        e.target.parentElement.parentElement.childNodes.forEach((ele, index) => {
            if (ele == e.target.parentElement) {
                console.log("same element Found")
                if (e.target.value == '') {
                    auotFocusIndex = index - 1;
                }
                else {
                    auotFocusIndex = index + 1;
                }
            }
        })
        e.target.parentElement.parentElement.childNodes.forEach((ele, index) => {
            if (auotFocusIndex == index) {
                ele.children[0].focus();
            }
        })
    }
    return (
        <>
            <div className="p-[10px] cursor-pointer" onClick={() => backToLogin(true)}>
                <ArrowBackIcon />
            </div>
            <div className="h-fit p-[20px]">
                <div className={className.otpContainer} elevation={0}>
                    <div className={className.otpFormContaner}>
                        <div>
                            <h3 className="text-2xl font-bold">Enter OTP</h3>
                        </div>
                        <div className="flex w-full  gap-[10px] *:w-[50px] *:h-[60px] *:rounded">
                            <div className="border-[1px] flex justify-center items-center border-black" onChange={(e) => handleInput(e, 0)}>
                                <input className="w-full h-full text-center rounded" maxLength={1} />
                            </div>

                            <div className="border-[1px] flex justify-center items-center border-black" onChange={(e) => handleInput(e, 1)}>
                                <input className="w-full h-full text-center rounded" maxLength={1} />
                            </div>


                            <div className="border-[1px] flex justify-center items-center border-black" onChange={(e) => handleInput(e, 2)}>
                                <input className="w-full h-full text-center rounded" maxLength={1} />
                            </div>

                            <div className="border-[1px] flex justify-center items-center border-black" onChange={(e) => handleInput(e, 3)}>
                                <input className="w-full h-full text-center rounded" maxLength={1} />
                            </div>

                        </div>

                        <div>
                            {timer > 0 ? <h3>Resend OTP in <span className="font-bold ">{timer} .</span></h3>
                                :
                                <div className="font-bold cursor-pointer" onClick={sendOtpTimer}>Resend OTP</div>
                            }
                        </div>

                        <div className="self-center w-full border-[1px] border-black p-[10px] text-center hover:bg-black hover:text-white transition delay-70">
                            <button className="h-full">Submit</button>
                        </div>

                        <div>
                            <h3>Logging using <span className="font-bold cursor-pointer">Password</span> .</h3>
                        </div>

                        <div>
                            <h3>Having trouble in Logging in ? <span className="font-bold cursor-pointer">Get help</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}