import React from 'react';
import { Link, } from 'react-router';
import assets from '../assets/assets';
import Container from './Container';

const Footer = () => {
    const navbarData = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/apps', name: 'Apps' },
        { id: 3, path: '/installation', name: 'Installation' }
    ]
    const links = navbarData.map(route => <Link key={route.id} to={route.path}><li className='font-normal'>{route.name}</li></Link>)

    return (
        <div className='bg-[#001931] pt-5'>
            <Container>
                <div className="rounded p-5 text-white">
                    <div className='flex flex-col-reverse justify-between items-center'>
                        <Link to={'/'} className="flex gap-1 items-center py-5">
                            <img src={assets.logo} alt="Logo" className='h-8 w-8' />
                            <span className='text-lg font-bold '>HERO.IO</span>
                        </Link>
                        <ul className='flex gap-5 '>
                            {links}
                        </ul>
                    </div>
                    <div className="border-t-1 pt-5 border-gray-600 text-center">
                        <p className='text-slate-400 text-[16px]'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;