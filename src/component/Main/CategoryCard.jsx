import React, { useEffect, useState } from "react";
import SingleCategoryCardShow from "./singleCategoryCardShow";

const CategoryCard = ({ showId }) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/Card.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCards(data)
            })
    }, [setCards]);
    console.log(showId);

    const filterData = cards.filter(card => card.category_id == showId);
    return (
        <div className="flex flex-col flex-wrap gap-4">

            {

                showId && showId.length >= 0 ?
                     (cards.map(cate => <SingleCategoryCardShow key={cate.id} cate={cate}></SingleCategoryCardShow>
                ))
                    :
                    (filterData.map(cate => <SingleCategoryCardShow key={cate.id} cate={cate}></SingleCategoryCardShow>
                    ))
            }

        </div>
    );
};

export default CategoryCard;
