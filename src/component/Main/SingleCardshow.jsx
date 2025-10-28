import React from 'react';
import { motion } from "framer-motion";
import { FaRegClock, FaEye } from "react-icons/fa";

const SingleCardshow = ({ singleData }) => {
    const {
        title,
        author,
        date,
        image,
        short_description,
        views,
        read_time,
    } = singleData;

    return (
        <motion.div
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md hover:shadow-2xl  hover:transition-transform hover:scale-105 duration-300 border border-gray-100 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center gap-6 p-4 md:p-6"
        >
            {/* Image */}
            <div className="w-full md:w-1/3 object-cover">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-56 md:h-48 object-cover rounded-xl"
                    whileHover={{
                        boxShadow: "0px 0px 25px rgba(59,130,246,0.4)",
                    }}
                    transition={{ duration: 0.4 }}
                />
            </div>

            {/* Content */}
            <div className="flex flex-col md:w-2/3 text-left">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-all duration-200">
                    {title}
                </h2>
                <p className="text-gray-500 text-sm mb-2">
                    {author} <span className="mx-2">•</span> {date}
                </p>
                <p className="text-gray-600 mb-4">{short_description}</p>

                {/* Footer */}
                <div className="flex flex-wrap items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <FaRegClock /> {read_time} Read
                        </span>
                        <span className="flex items-center gap-1">
                            <FaEye /> {views.toLocaleString()} Views
                        </span>
                    </div>

                    <button className="bg-[#D6344F] text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-600 transition-all duration-300 ">
                        Read Blog
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default SingleCardshow;
