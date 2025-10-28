import React from 'react';
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { div, filter } from "framer-motion/client";
import Modal1 from '../Modal1';

const SingleCategoryCardShow = ({ cate }) => {
    const modalId = `my_modal_${cate.id}`;
    return (
        <div>
            <motion.div
                className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 border border-gray-100"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}

            >
                {/* Image */}
                <motion.img
                    src={cate.image}
                    alt={cate.title}
                    className="w-20 h-20 rounded-lg object-cover"
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    transition={{ type: "spring", stiffness: 150 }}
                />

                {/* Content */}
                <div className="flex flex-col justify-between">
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                        {cate.title}
                    </h3>
                    <p className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <FaUser className="text-gray-400" />
                        {cate.author}
                    </p>
                    <div className="mt-2">
                        <button  onClick={() => document.getElementById(modalId).showModal()} className=" bg-[#5C84FA]  text-white text-xs sm:text-sm md:text-[15px] lg:text-sm
                            px-3 py-1 sm:px-4 sm:py-1 md:px-5 md:py-1.5 lg:px-4 lg:py-1
                            hover:bg-blue-700 rounded-md transition-all duration-300 w-fit">
                            Read More →
                        </button>
                        <div>
                            <div>
                                <Modal1 key={cate.id} singleData={cate} modalId={modalId}></Modal1>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SingleCategoryCardShow;