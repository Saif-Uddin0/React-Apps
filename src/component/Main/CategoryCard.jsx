import React from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const CategoryCard = ({ cate }) => {
    return (
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
                whileHover={{ scale: 1.1, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
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
                <button className="mt-2 text-blue-600 text-xs font-medium hover:underline">
                    Read More →
                </button>
            </div>
        </motion.div>
    );
};

export default CategoryCard;
