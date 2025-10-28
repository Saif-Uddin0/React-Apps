import React from 'react';

const Category = ({cate}) => {
    console.log(cate);
    
    return (
        <div className=''>
            <button className='btn bg-white border text-md font-semibold border-gray-300 text-gray-600 p-5 shadow-xs hover:shadow-md hover:transition-transform hover:scale-105 duration-500 hover:text-black'>{cate.name}</button>
        </div>
    );
};

export default Category;