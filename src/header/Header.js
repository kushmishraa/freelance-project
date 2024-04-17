import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

export const Header = (props) => {
    return (
        <div className='w-full flex bg-grey justify-between items-center p-[20px]'>
            <div>
                <h2 className='text-white text-2xl font-bold'>Ceazur</h2>
            </div>
            <div className='flex items-center relative pr-[50px]'>
                <input placeholder='Search' className='w-10px py-[5px] px-[12px] rounded-2xl focus:outline-none border-[1px] border-black z-10'>
                </input>
                <div className='bg-gray-400 px-[12px] py-[4px] pointer border-[1px] border-gray-500 rounded-r-lg absolute right-[10px]'>
                    <SearchIcon />
                </div>
            </div>
            <div className='flex gap-[10px]'>
                <AccountCircleIcon sx={{ color: "white" }} />
                <FavoriteIcon sx={{ color: "white" }} />
                <ShoppingCartIcon sx={{ color: "white" }} />
            </div>
        </div>
    )
}