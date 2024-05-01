import React, { useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const searchBarRef = useRef();
  const inputRef = useRef();
  const menuRef = useRef();
  const searchResultRef = useRef();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState();
  const [isUserLoggedIn, setLoggedInUser] = useState(false);

  const handleSearchBar = (e) => {
    if (inputRef.current.classList.contains("scale-x-0")) {
      inputRef.current.classList.replace("scale-x-0", "scale-x-100");
    } else {
      inputRef.current.classList.replace("scale-x-100", "scale-x-0");
      handleSearch();
    }
  };

  const handleMenuOpen = () => {
    menuRef.current.classList.replace("scale-x-0", "scale-x-100");
  };

  const handleMenuClose = () => {
    menuRef.current.classList.replace("scale-x-100", "scale-x-0");
  };

  const handleSearch = (e) => {
    e?.target && setSearchQuery(e.target.value);
    if (e?.target.value.length >= 3) {
      searchResultRef.current.classList.replace("scale-y-0", "scale-y-100");
    } else {
      searchResultRef.current.classList.replace("scale-y-100", "scale-y-0");
    }
  };

  const clasName = {
    headerPaperContainer: "sticky top-0 z-10",
    headerContainer: "bg-white relative",
    headerLeftContainer:
      "w-full flex  justify-between items-center py-[20px] px-[10px] gap-[8px] sm:gap-[15px] sm:px-[50px]",
    headerRightContainer:
      "bg-white absolute top-0 right-0 left-0 bottom-0 scale-x-0 transition delay-70 flex items-center justify-center origin-right",
  };

  return (
    <Paper elevation={4} className={clasName.headerPaperContainer}>
      <div className={clasName.headerContainer}>
        <div className={clasName.headerLeftContainer}>
          {/* logo holder */}
          <div className="pr-[20px] sm:p-[0px] cursor-pointer" onClick={() => navigate('/')}>
            <h2 className="text-black text-2xl font-bold">Ceazur</h2>
          </div>
          {/* logo holder */}

          {/* search bar holder */}
          <div className="w-full  sm:w-1/2  flex items-center rounded-lg">
            <div
              className=" py-[5px] px-[5px]
                            border-r-0  transition delay-70
                             w-full border-r-0 rounded-l-xl
                             relative"
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
                value={searchQuery}
                onChange={handleSearch}
              ></input>
              <div
                className="absolute  w-full bg-white max-h-[300px] overflow-y-scroll
                             top-[100%] scale-y-0 transition delay-70 origin-top scrollbar *:cursor-pointer"
                ref={searchResultRef}
              >
                <ul className="*:p-[12px]">
                  <li className="hover:font-bold">Item 1</li>
                  <li className="hover:font-bold">Item 1</li>
                  <li className="hover:font-bold">Item 1</li>
                  <li className="hover:font-bold">Item 1</li>
                  <li className="hover:font-bold">Item 1</li>
                  <li className="hover:font-bold">Item 1</li>
                  <li className="hover:font-bold">Item 1</li>
                  <li className="hover:font-bold">Item 1</li>
                  <li className="hover:font-bold">Item 1</li>
                  <li className="hover:font-bold">Item 1</li>
                </ul>
              </div>
            </div>
            <div
              className="group/searchbar px-[10px] py-[5px] sm:px-[50px] sm:py-[10px] hover:bg-black transition delay-70 pointer  rounded sm:rounded-r-lg 
          cursor-pointer"
            >
              <SearchIcon
                className="text-black group-hover/searchbar:text-white"
                onClick={handleSearchBar}
              />
            </div>
          </div>
          {/* search bar holder */}

          {/* icons holder */}
          <div className="hidden sm:flex items-center sm:gap-[20px]">
            {isUserLoggedIn ? (
              <AccountCircleIcon sx={{ color: "black" }} />
            ) : (
              <p
                className="font-bold cursor-pointer px-[10px] py-[5px] 
                            rounded-xl"
                onClick={() => setLoggedInUser(!isUserLoggedIn)}
              >
                Login
              </p>
            )}
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
          {/* icons holder */}

          {/* menu icon holder */}
          <div className="sm:hidden">
            <MenuIcon className="text-black" onClick={handleMenuOpen} />
          </div>
          {/* menu icon holder */}
        </div>

        {/* mobile menu holder */}
        <div className={clasName.headerRightContainer} ref={menuRef}>
          <div className="flex items-center">
            <div className="flex gap-[30px] ">
              {isUserLoggedIn ? (
                <div onClick={() => navigate('/dashboard')}>
                  <AccountCircleIcon sx={{ color: "black" }} />
                </div>
              ) : (
                <p
                  className="font-bold cursor-pointer px-[10px] py-[5px] 
                            rounded-xl"
                  onClick={() => {
                    navigate('/login')
                    setLoggedInUser(!isUserLoggedIn)
                  }
                  }
                >
                  Login
                </p>
              )}

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

            <div
              className="bg-black absolute z-30 right-0  p-[10px] rounded"
              onClick={handleMenuClose}
            >
              <CloseIcon className="text-white" />
            </div>
          </div>
        </div>
        {/* mobile menu holder */}
      </div>
    </Paper>
  );
};
