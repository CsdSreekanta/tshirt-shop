import React, { useState } from "react";
import useTShirts from "../../hooks/useTshirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
 import  "./Home.css"

const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  const [cart, setCart] = useState([])
  console.log(cart)

  const handleAddToCart= (selectedItem)=>{
   const exists= cart.find(tShirt=> tShirt._id===selectedItem._id)
    if(!exists){
      const newCart =[...cart, selectedItem];
      setCart(newCart)   
    }
    else{
      alert('Already item added to the cart')
    }

  }
  const handleRemoveFromCart= (selectedItem)=>{
    const rest = cart.filter(tShirt =>tShirt._id!==selectedItem._id)
    setCart(rest)

  }

  return (
    <div>
      <div className="home-container mt-8">
        <div className="tshirt-container grid grid-cols-3">
          {
            tShirts.map(tShirt => <TShirt 
              key={tShirt._id} 
              tShirt={tShirt}
              handleAddToCart={handleAddToCart}
              ></TShirt>)
          }
        </div>
        <div className="cart-container ">
         <Cart
         handleRemoveFromCart={handleRemoveFromCart}
         cart={cart}
         ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
