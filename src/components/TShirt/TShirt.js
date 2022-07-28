import React from 'react';
import './TShirt.css'


const TShirt = ({tShirt, handleAddToCart}) => {
   
    const {name, picture, price} =tShirt
    return (
        <div className='tShirt border-2 shadow-lg rounded w-72 h-85 ml-8 mb-8 border-gray-400'>
            <img  className="ml-0.5 " src={picture} alt="" />
            <h1 className='font-bold text-xl'>{name}</h1>
            <p className="font-bold text-orange-500" >Price: ${price}</p>
            <button onClick={()=>handleAddToCart(tShirt)} className='button bg-blue-600 p-2 m-1 rounded font-bold'>Add to Cart</button>
        </div>
    );
};

export default TShirt;