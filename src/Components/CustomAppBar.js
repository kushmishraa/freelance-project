import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export const  CustomAppBar = () => {

  return (
    <div className='w-full bg-sky-500 h-[60px] flex justify-between items-center p-[20px] '>
        
        <div>
            <p className='text-white text-2xl font-bold'>Brand Name</p>
        </div>
        
        <div className='flex gap-[10px] text-white max-md:hidden'>
            <div>Action</div>
            <div>Action</div>
            <div>Action</div>
            <div>Action</div>
        </div>

      <div className='hidden max-md:block'>
        <MenuIcon sx={{color : "white"}}/>
      </div>
    </div>
  );
}
