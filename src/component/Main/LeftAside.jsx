import React, { useEffect, useState } from 'react';
import Category from './Category';
import CategoryCard from './CategoryCard';

const LeftAside = ({handleCategoryId ,showId}) => {
    const [categories , setCategories] = useState([]);

    useEffect(()=>{
        fetch('/Category.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            setCategories(data)
        })
    },[setCategories]);
    // console.log(categories);
    

    return (
        <div className='border border-gray-200 shadow-xs rounded-md pb-5 p-2'>
            <div className='flex flex-col md:flex-row flex-wrap gap-4 justify-items-start px-3 py-6'>
                {
                    categories.map(cate => <Category handleCategoryId={handleCategoryId} key={cate.id} cate={cate}></Category>)
                }
            </div>
            <div className='p-2'>
                <CategoryCard showId={showId}></CategoryCard>
            </div>
        </div>
    );
};

export default LeftAside;