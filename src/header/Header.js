import React, { useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Paper } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Header = (props) => {
    const searchBarRef = useRef();
    const inputRef = useRef();
    const menuRef = useRef();

    const handleSearchBar = (e) => {
        if (inputRef.current.classList.contains("scale-x-0")) {
            inputRef.current.classList.replace("scale-x-0", "scale-x-100");
        }
        else {
            inputRef.current.classList.replace("scale-x-100", "scale-x-0")
        }
    };

    const handleMenuOpen = () => {
        menuRef.current.classList.replace("scale-x-0", "scale-x-100");
    }

    const handleMenuClose = () => {
        menuRef.current.classList.replace("scale-x-100", "scale-x-0");
    }
    return (
        <Paper elevation={4} className="sticky top-0 z-10">
            <div className="bg-white relative">
                <div className="w-full flex  justify-between items-center py-[20px] px-[10px] gap-[8px] sm:gap-[15px] sm:px-[50px]">
                    <div className="pr-[20px] sm:p-[0px]">
                        <h2 className="text-black text-2xl font-bold">Ceazur</h2>
                    </div>

                    <div className="w-full  sm:w-1/2  flex items-center rounded-lg">
                        <div
                            className=" py-[5px] px-[5px]
         border-r-0  transition delay-70 w-full border-r-0 rounded-l-xl"
                            ref={searchBarRef}
                        >
                            <input
                                placeholder="Search"
                                className="py-[5px] px-[5px] rounded sm:py-[5px] sm:px-[15px] 
                        focus:outline-none scale-x-0 md:scale-x-100 sm:rounded-l-2xl w-full border-[1px] 
                        transition duration-70
                        border-black origin-right"
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

                    <div className="hidden sm:flex items-center sm:gap-[20px]">
                        {false ? <AccountCircleIcon sx={{ color: "black" }} /> :
                            <p className="font-bold cursor-pointer px-[10px] py-[5px] 
                            rounded-xl">
                                Login
                            </p>}
                        <div className="relative cursor-pointer">
                            <FavoriteIcon sx={{ color: "black" }} />
                            <div className="absolute top-0 right-0 rounded-[100%] w-[12px] h-[12px] bg-red-500 flex items-center justify-center">
                                <p className="text-white text-[8px]">10</p>
                            </div>
                        </div>

                        <div className="relative cursor-pointer">
                            <ShoppingCartIcon sx={{ color: "black" }} />
                            <div className="absolute top-0 right-0 rounded-[100%] w-[12px] h-[12px] bg-red-500 flex items-center justify-center">
                                <p className="text-white text-[8px]">10</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:hidden">
                        <MenuIcon className="text-black" onClick={handleMenuOpen} />
                    </div>
                </div>
                <div className="bg-white absolute top-0 right-0 left-0 
                bottom-0 scale-x-0 transition delay-70 flex items-center justify-center origin-right" ref={menuRef}>
                    <div className="flex items-center">
                        <div className="flex gap-[30px] ">
                            {false ? <AccountCircleIcon sx={{ color: "black" }} /> :
                                <p className="font-bold cursor-pointer px-[10px] py-[5px] 
                            rounded-xl">
                                    Login
                                </p>
                            }

                            <div className="relative">
                                <FavoriteIcon sx={{ color: "black" }} />
                                <div className="absolute top-0 right-0 rounded-[100%] w-[12px] h-[12px] bg-red-500 flex items-center justify-center">
                                    <p className="text-white text-[10px]">1</p>
                                </div>
                            </div>

                            <div className="relative">
                                <ShoppingCartIcon sx={{ color: "black" }} />
                                <div className="absolute top-0 right-0 rounded-[100%] w-[12px] h-[12px] bg-red-500 flex items-center justify-center">
                                    <p className="text-white text-[10px]">1</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black absolute z-30 right-0  p-[10px] rounded" onClick={handleMenuClose}>
                            <CloseIcon className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    );
};
