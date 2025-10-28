import React, { useEffect, useState } from 'react';
import Category from './Category';
import CategoryCard from './CategoryCard';

const LeftAside = () => {
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
        <div className='border border-gray-200 shadow-xs rounded-md '>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-3 py-6'>
                {
                    categories.map(cate => <Category key={cate.id} cate={cate}></Category>)
                }
            </div>
            <div>
                {
                    categories.slice(0,7).map(cate => <CategoryCard key={cate.id} cate={cate}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default LeftAside;