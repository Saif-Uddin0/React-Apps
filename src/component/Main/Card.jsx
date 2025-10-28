import React, { useEffect, useState } from 'react';
import SingleCardshow from './SingleCardshow';

const Card = ({showId}) => {
    const [data ,setData ] = useState([])
    // const [displayData , setDisplaydata] = useState([])
    

    useEffect(()=>{
        fetch('/Card.json')
        .then(res=> res.json())
        .then(singleCard => {
            // console.log(singleCard);
            setData(singleCard)
    })
    },[setData]);
    const filterData = showId? data.filter(singleData => singleData.category_id == showId ) : data ;
    console.log(filterData);
    return (
        <div className='grid grid-cols-1 gap-7'>
                {showId && showId.length>=0?
                    (data.map(singleData => <SingleCardshow
                         key={singleData.id}
                         singleData={singleData}
                         ></SingleCardshow> ) ) 

                         :

                          (filterData.map(singleData => <SingleCardshow
                         key={singleData.id}
                         singleData={singleData}
                         ></SingleCardshow> ) )
                }
        </div>
    );
};

export default Card;