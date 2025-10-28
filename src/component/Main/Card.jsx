import React, { useEffect, useState } from 'react';
import SingleCardshow from '../SingleCardshow';

const Card = () => {
    const [data ,setData ] = useState([])


    useEffect(()=>{
        fetch('/Card.json')
        .then(res=> res.json())
        .then(singleCard => {
            console.log(singleCard);
            setData(singleCard)
    })
    },[setData]);
    return (
        <div className='grid grid-cols-1 gap-7'>
                {
                    data.map(singleData => <SingleCardshow
                         key={singleData.id}
                         singleData={singleData}
                         ></SingleCardshow> )
                }
        </div>
    );
};

export default Card;