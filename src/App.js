import React from "react";
import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import { useState,  } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";

export default function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
     
      return array.id === item.id;
    });
   
    if (isAlreadyAdded !== -1) {
      toast("Already added in cart", {
        type: "error",
      });
      return;
    }
    //this below setcartItem means add old values as well as new values
    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase Completed", {
      message: "Success",
    });
  };


  const removeItem = (item) => {
    setCartItem(cartItem.filter((singlItem) => singlItem.id != item.id));
  };

  return (
    <div className="App">
      <div className="flex flex-row">
        <BuyPage addInCart={addInCart} />
        <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
         <ToastContainer/>
      </div>
    </div>
  );
}
