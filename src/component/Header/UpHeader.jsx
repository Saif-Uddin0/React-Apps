import React from 'react';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const UpHeader = () => {
    return (
        <div className='w-full bg-gradient-to-r from-[#5985FC] via-[#BC79B5] to-[#F55F7E]'>
            <ul className='flex items-center justify-center gap-10 p-2 text-white'>
                <li className='hover:transition-transform hover:scale-115 hover:duration-500 hover:shadow-lg'><FaFacebookF></FaFacebookF></li>
                <li className='hover:transition-transform hover:scale-115 hover:duration-500 hover:shadow-lg'><FaYoutube></FaYoutube></li>
                <li className='hover:transition-transform hover:scale-115 hover:duration-500 hover:shadow-lg'><FaInstagram></FaInstagram></li>
                <li className='hover:transition-transform hover:scale-115 hover:duration-500 hover:shadow-lg'><FaTelegramPlane></FaTelegramPlane></li>
            </ul>
        </div>
    );
};

export default UpHeader;