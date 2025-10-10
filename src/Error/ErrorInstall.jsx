import React from 'react';
import assets from '../assets/assets';

const ErrorInstall = () => {
    return (
        <div className='flex flex-col justify-center items-center my-10 mx-3'>
            <img src={assets.appError} alt="" className='w-60 h-60' />
            <div className='text-2xl font-bold text-center my-10'> OPPS!! INSTALL APP NOT FOUND</div>
        </div>
    );
};

export default ErrorInstall;