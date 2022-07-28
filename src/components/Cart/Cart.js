import { info } from 'autoprefixer';
import React from 'react';
import SingleTShirt from '../SingleTShirt/SingleTShirt';

const Cart = ({cart, handleRemoveFromCart}) => {
    let command;
   if(cart.length===0){
    command = <p>Please add at least one item</p>
    }
    else if(cart.length===1){
        command = <p> Please add more item</p>
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
            {command}
      
           
        </div>
    );
};

export default Cart;