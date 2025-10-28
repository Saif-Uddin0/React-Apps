import React from 'react';
import navImg from '../.././assets/log.jpg'
import { CiSearch, CiShop } from 'react-icons/ci';
import { FaTelegramPlane } from 'react-icons/fa';

const LowHeader = () => {
    return (
        <div className='w-full bg-base-100 shadow-sm'>
            <div className="navbar  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-gray-600">
                            <li className='hover:text-[#FB5875] hover:bg-none'><a>Home</a></li>
                            <li className='hover:text-[#FB5875] hover:bg-white'><a>Success Story</a></li>
                            <li className='hover:text-[#FB5875] hover:bg-none'><a>About</a></li>
                            <li className='hover:text-[#FB5875] hover:bg-none'><a>Blog</a></li>
                            <li className='hover:text-[#FB5875] hover:bg-none'><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn border-none bg-white w-30 md:w-40 hover:transition-transform hover:scale-110 hover:duration-500"><img src={navImg} alt="" /></a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-gray-600">
                        <li className='hover:text-[#FB5875] hover:transition-shadow hover:scale-105 hover:duration-500'><a>Home</a></li>
                        <li className='hover:text-[#FB5875] hover:bg-white hover:transition-shadow hover:scale-105 hover:duration-500'><a>Success Story</a></li>
                        <li className='hover:text-[#FB5875] hover:bg-none hover:transition-shadow hover:scale-105 hover:duration-500'><a>About</a></li>
                        <li className='hover:text-[#FB5875] hover:bg-none hover:transition-shadow hover:scale-105 hover:duration-500'><a>Blog</a></li>
                        <li className='hover:text-[#FB5875] hover:bg-none hover:transition-shadow hover:scale-105 hover:duration-500'><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-3">
                    <a className="btn hover:bg-[#d6344f] bg-[#FB5875] text-white hover:transition-transform hover:scale-110 hover:duration-500"><FaTelegramPlane></FaTelegramPlane>Join Now</a>
                    <p className='text-2xl hover:transition-shadow hover:scale-105 hover:duration-500 hover:shadow-xl'><CiSearch></CiSearch></p>
                    <p className='text-2xl hover:transition-shadow hover:scale-105 hover:duration-500 hover:shadow-lg'><CiShop></CiShop></p>
                </div>
            </div>
        </div>
    );
};

export default LowHeader;