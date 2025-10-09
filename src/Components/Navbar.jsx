import { Link, NavLink } from 'react-router';
import Container from './Container';
import { Menu } from 'lucide-react';
import assets from '../assets/assets';
import { IoLogoGithub } from "react-icons/io5";


const Navbar = () => {
    const navbarData = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/apps', name: 'Apps' },
        { id: 3, path: '/installation', name: 'Installation' }
    ]
    const links = navbarData.map(route => <li key={route.id}><NavLink to={route.path}
        className={({ isActive }) => `btn btn-ghost font-normal 
        ${isActive && 'gradient bg-clip-text text-transparent'}`}>{route.name}</NavLink></li>)
    return (
        <div className='shadow-sm'>
            <Container>
                <div className="navbar p-0 mr-3 lg:mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <Menu />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <Link to={'/'} className="flex gap-1 items-center">
                            <img src={assets.logo} alt="Logo" className='h-8 w-8' />
                            <span className='text-lg font-bold bg-clip-text gradient text-transparent'>HERO.IO</span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a target='_blank' href='https://github.com/ziauddinJim/' className="btn gradient text-white"><IoLogoGithub /> Contribute</a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;