import React from 'react';

const Banner = () => {
    return (
        <div className='text-center '>
            <h1 className='text-6xl font-bold mt-20'>
                We Build <br />
                <span className='gradient bg-clip-text text-transparent'> Productive</span> Apps
            </h1>
            <p className='gray mt-4 mb-10'>
                At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <ul className='flex justify-center gap-5'>
                <li className='btn btn-outline '>
                    <a href="https://play.google.com/">Google Play</a></li>
                <li className='btn btn-outline '>
                    <a href="https://www.apple.com/app-store">App Store</a></li>
            </ul>
        </div>
    );
};

export default Banner;