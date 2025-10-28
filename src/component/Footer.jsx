import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-black  text-gray-200 mt-15  w-full">
            <div className="w-11/12  mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 justify-between">


                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul className=" space-y-2">
                        <li>
                            <a className="hover:text-gray-200 transition-colors duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-gray-200 transition-colors duration-300">
                                Courses
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-gray-200 transition-colors duration-300">
                                My Profile
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-gray-200 transition-colors duration-300">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-wide">React_App_01</h2>
                    <p className="text-gray-300">
                        Creating an e-commerce website is a great project to learn React. In this tutorial, we’ll use React, Context API, and Firebase to handle authentication and data storage. You’ll also learn to create a cart system, product pages, and payment integration. By the end, you’ll have a fully functional online store.
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                        <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                <div className=" space-y-4">
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                    <p className="flex items-center gap-2">
                        <FaEnvelope /> support@learnhut.com
                    </p>
                    <p className="flex items-center gap-2">
                        <FaPhoneAlt /> +880 123 456 789
                    </p>
                    <p>Mohakhali , Dhaka, Bangladesh</p>
                </div>
            </div>

            {/* ===== Bottom Bar ===== */}
            <div className="border-t border-white/20 mt-10 py-4 text-center text-gray-200 text-sm">
                &copy; {new Date().getFullYear()} React_App_01. All rights reserved by <strong>SAIF UDDIN</strong>.
            </div>
        </footer>
    );
};

export default Footer;