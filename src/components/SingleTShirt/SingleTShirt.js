import React from "react";

const SingleTShirt = ({ product, handleRemoveFromCart }) => {
  const { name, price } = product;
  return (
    <div className="bg-blue-700 text-black font-bold p-2 rounded-lg m-2 flex justify-between items-center shadow-lg ">
      <p>{name}</p>
      <p>Price: ${price}</p>
      <button onClick={()=>handleRemoveFromCart(product)} className="bg-orange-400 p-2 text-orange font-bold flex justify-center items-center text-2xl w-12 h-12 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default SingleTShirt;
