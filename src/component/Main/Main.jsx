import React, { Suspense } from 'react';
import Card from './Card';
import LeftAside from './LeftAside';

const Main = () => {
    return (
        <div className='container px-4 py-8 mx-auto grid grid-cols-1 md:grid-cols-9 gap-6'>
            <div className='md:col-span-3 order-1 md:order-2'>
                <LeftAside></LeftAside>
            </div>
            <div className='md:col-span-6 order-2 md:order-1'>

                <Suspense fallback={<p>laodinggg.....</p>}>

                    <Card></Card>
                </Suspense>
            </div>

        </div>
    );
};

export default Main;