import { createContext, useContext, useState } from "react"
const CartContextCounter=createContext()
export function useCartCounter(){
  return useContext(CartContextCounter)
}
function CartProvider(props){
  const [cartCount,setCartCount]=useState(0)
  const countIncreaser=function(){
    setCartCount(cartCount+1)
  }
  const countDecreaser=function(){
    setCartCount(cartCount-1)
  }
  return(
    <CartContextCounter.Provider value={{cartCount,countIncreaser,countDecreaser}}>
      {props.children}
    </CartContextCounter.Provider>
  )
}
export default CartProvider