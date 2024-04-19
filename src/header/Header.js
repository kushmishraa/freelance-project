import React, { useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Paper } from "@mui/material";

export const Header = (props) => {
    const searchBarRef = useRef();
    const inputRef = useRef();

    const handleSearchBar = (e) => {
        if (inputRef.current.classList.contains("scale-x-0")) {
            inputRef.current.classList.replace("scale-x-0", "scale-x-100");
            inputRef.current.focus();
        }
        else {
            inputRef.current.classList.replace("scale-x-100", "scale-x-0")
        }
    };
    return (
        <Paper elevation={4} className="sticky top-0 z-10">
            <div className="w-full flex bg-white justify-between items-center py-[20px] px-[10px] gap-[15px] sm:px-[50px]">
                <div className="pr-[20px] sm:p-[0px]">
                    <h2 className="text-black text-2xl font-bold">Ceazur</h2>
                </div>

                <div className=" w-full  sm:w-1/2  flex items-center relative rounded-lg">
                    <div
                        className=" py-[5px] px-[5px]
         border-r-0  transition delay-70 w-full border-r-0 rounded-l-xl"
                        ref={searchBarRef}
                    >
                        <input
                            placeholder="Search"
                            className="py-[5px] px-[5px] rounded sm:py-[5px] sm:px-[15px] 
                        focus:outline-none scale-x-0 sm:rounded-l-2xl w-full border-[1px] 
                        transition duration-70
                        border-black"
                            onBlur={(e) => handleSearchBar(e)}
                            ref={inputRef}
                        ></input>
                    </div>
                    <div
                        className="group/searchbar px-[10px] py-[5px] sm:px-[50px] sm:py-[10px] hover:bg-black transition delay-70 pointer  rounded sm:rounded-r-lg 
          cursor-pointer"
                    >
                        <SearchIcon className="text-black group-hover/searchbar:text-white" onClick={handleSearchBar} />
                    </div>
                </div>



                <div className="hidden sm:flex sm:gap-[10px]">
                    <AccountCircleIcon sx={{ color: "black" }} />
                    <FavoriteIcon sx={{ color: "black" }} />
                    <ShoppingCartIcon sx={{ color: "black" }} />
                </div>
            </div>
        </Paper>
    );
};
