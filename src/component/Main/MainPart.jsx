import React, { Suspense, useState } from 'react';
import Card from './Card';
import LeftAside from './LeftAside';
import Loader from '../Loader';

const MainPart = () => {

    const [showId , setShowId] = useState([])

    const handleCategoryId =(id)=>{
        console.log(id);
        setShowId(id);
        
    }
    return (
        <div className='container px-4 py-8 mx-auto grid grid-cols-1 md:grid-cols-9 gap-10 mt-15'>
            <Suspense fallback={<Loader></Loader>}>
                <div className='md:col-span-3 order-1 md:order-2'>
                <LeftAside showId={showId} handleCategoryId={handleCategoryId}></LeftAside>
            </div>
            </Suspense>
            <div className='md:col-span-6 order-2 md:order-1'>

                <Suspense fallback={<Loader></Loader>}>
                    <Card handleCategoryId={handleCategoryId} showId={showId}></Card>
                </Suspense>
            </div>

        </div>
    );
};

export default MainPart;