import React, { createContext, useContext, useState } from 'react'
const CartContextItems=createContext()
export function useCartItems(){
    return useContext(CartContextItems)
}
function CartProvider1(props) {
  const[cartItems,setCartItems]=useState([])
  const addToCart=(products)=>{
    setCartItems([...cartItems,products])    
  } 
  const removeFromCart = (itemId) => {
    const itemIndex=cartItems.findIndex((arr) => {
      return(
        arr.m_id||arr.l_id||arr.t_id||arr.sw_id||arr.b_id||arr.p_id===itemId
      )
      //If return condition is true itemIndex will be 0 if false itemIndex will be -1
    });
    if (itemIndex!==-1) {
      const updatedCart = [...cartItems];//create a new array(updatedCart) and storing old array(cartItems)
      updatedCart.splice(itemIndex, 1);//removing 1 item from itemIndex 
      setCartItems(updatedCart);
    }
  };
  return (
    <CartContextItems.Provider value={{cartItems,addToCart,removeFromCart}}>
        {props.children}
    </CartContextItems.Provider>
  )
}
export default CartProvider1