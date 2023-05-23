import React from 'react';

const FoodCard = ({ item }) => {

    const { name, recipe, image, price } = item;

    return (
        <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute right-0 mr-4 mt-4 px-4 bg-[#35096f] text-white bg-opacity-80'>$ {price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline border-0 bg-[#e1cff6] border-b-4 btn-primary mt-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;