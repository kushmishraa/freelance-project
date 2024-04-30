import { Paper } from "@mui/material";
import React, { useRef, useState } from "react";
import { OtpPage } from "./OtpPage";

export const Login = () => {
  const inputRef = useRef();
  const inputContainerRef = useRef();

  const [iscontinue, setContinue] = useState(true);

  const className = {
    loginPageContainer:
      "flex items-center justify-center px-[15px] md:px-[0px] md:py-[50px]",
    loginContainer: "w-[400px] flex flex-col gap-[15px] pb-[20px]",
    bannerContainer: "h-[160px]",
    loginFormContainer:
      "px-[20px] md:px-[50px] py-[30px] flex flex-col gap-[20px] ",
  };

  const handleInputClick = () => {
    inputContainerRef.current.classList.replace(
      "border-gray-300",
      "border-black"
    );
    inputRef.current.focus();
  };

  const handleBlur = (e) => {
    inputContainerRef.current.classList.replace(
      "border-black",
      "border-gray-300"
    );
    inputRef.current.blur();
  };

  return (
    <div className={className.loginPageContainer}>
      {iscontinue ? (
        <Paper className={className.loginContainer}>
          <div className={className.bannerContainer}>
            <img
              src="/freelance-project/loginBannerImages/loginBannerImage.webp"
              className="h-[100%] w-[100%]"
            />
          </div>
          <div className={className.loginFormContainer}>
            <div>
              <h3>
                <span className="font-bold text-2xl">Login</span> or{" "}
                <span className="font-bold text-2xl">Signup</span>
              </h3>
            </div>

            <div
              className="flex border-[1px] border-gray-300 p-[10px] divide-x-2 gap-[10px] rounded cursor-text"
              onClick={handleInputClick}
              onBlur={(e) => handleBlur(e)}
              ref={inputContainerRef}
            >
              <div>+91</div>
              <input
                placeholder="Mobile Number"
                className="outline-none w-[120px] pl-[5px]"
                ref={inputRef}
                onClick={handleInputClick}
              />
            </div>

            <div className="text-[13px]">
              <h3>
                By continuing, I agree to the{" "}
                <span className="font-bold cursor-pointer">Terms of use</span> &{" "}
                <span className="font-bold cursor-pointer">Privacy Policy</span>{" "}
              </h3>
            </div>

            <div
              className="text-center border-[1px] border-black rounded p-[10px] cursor-pointer"
              onClick={() => setContinue(!iscontinue)}
            >
              <button className="text-center">CONTINUE</button>
            </div>

            <div>
              <h3>
                Have trouble in logging in?{" "}
                <span className="font-bold cursor-pointer">Get help</span>
              </h3>
            </div>
          </div>
        </Paper>
      ) : (
        <OtpPage backToLogin={setContinue} />
      )}
    </div>
  );
};
