import { info } from 'autoprefixer';
import React from 'react';
import SingleTShirt from '../SingleTShirt/SingleTShirt';

const Cart = ({cart, handleRemoveFromCart}) => {
    //conditional rendering option
    //element variable
    // ternary operator 
    let command;
   if(cart.length===0){
    command = <p>Please add at least one item</p>
    }
    else if(cart.length===1){
        command = <p> Please add more....</p>
    }
    else{
        command = <p> Thanks for adding</p>
    }

    return (
        <div>
            <h2>This is cart:{cart.length}</h2>
            {
       cart.map(product => <SingleTShirt
       key={product._id}
      product={product}
      handleRemoveFromCart={handleRemoveFromCart}
       ></SingleTShirt> )
            }
        {
            cart.length ===3 || <p>You can buy</p>
        }
            {
             cart.length===4 ? <button className='button bg-blue-600 p-2 font-bold rounded-lg text-black'> Review all</button> :<p>keep adding</p>
            }
            {command}
      
           
        </div>
    );
};

export default Cart;