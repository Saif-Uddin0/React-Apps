import React from 'react';

const Category = ({cate,handleCategoryId}) => {
    
    return (
        <div className=''>
            <button onClick={()=>handleCategoryId(cate.id)} className='btn bg-white border text-md lg:text-lg font-semibold border-gray-200 text-gray-600 p-5 shadow-xs hover:shadow-md hover:transition-transform hover:scale-105 duration-500 hover:text-black'>{cate.name}</button>
        </div>
    );
};

export default Category;