import React from 'react';
import { useCartCounter } from './CartContextCounter';
import { useCartItems } from './CartContextItems';
import { Link } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './Cart.css'
function Cart() {
  const{countDecreaser}=useCartCounter()  
  const{cartItems,removeFromCart}=useCartItems()
  let total=0
  for (const item of cartItems){
    if(item.m_price){
      total+=item.m_price;
    }
    if(item.l_price){
      total+=item.l_price;
    }
    if(item.t_price){
      total+=item.t_price;
    }
    if(item.sw_price){
      total+=item.sw_price;
    }
    if(item.b_price){
      total+=item.b_price;
    }
    if(item.p_price){
      total+=item.p_price;
    }
  }
  return (
    <div className='container-fluid'>
      <div className="text-center">
        <h1>{cartItems.length===0 && "Your Cart is empty"}</h1>
        {/* <h1 className='text-center'>{cartItems.length===0 ? "Your Cart is empty":null}</h1> */}
        <Link to='/'>
            {cartItems.length===0 && <button className='border-0 bg-primary rounded-2 px-5 py-2 text-white fw-bold'><ShoppingCartCheckoutIcon/>Shop Now</button>}
        </Link>
      </div>
        {
            cartItems.map((item,index)=>{
                return(
                   <div className="text-center" key={index}>
                    {
                        item.m_id &&(
                            <div className="mobiles">
                                <img src={item.m_img} alt={item.m_name} className='img-fluid'/>
                                <p className='fw-bold'>{item.m_name}</p>
                                {item.m_price && <h1>₹{item.m_price}</h1>}
                                <button onClick={()=>{countDecreaser();removeFromCart(item.m_id);}} className='border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold m-1'>Remove from cart</button> 
                            </div>
                        )
                    }
                    {/* {
                        item.m_id ?(
                            <div className="mobiles">
                                 <img src={item.m_img} alt={item.m_name} className='img-fluid' />
                                 <p className='fw-bold'>{item.m_name}</p>
                                 {item.m_price && <h1>₹{item.m_price}</h1>}
                            </div>
                        ) :null
                    } */}
                    {
                        item.l_id &&(
                            <div className="laptops">
                                 <img src={item.l_img} alt={item.l_name} className='img-fluid' />
                                 <p className='fw-bold'>{item.l_name}</p>
                                 {item.l_price && <h1>₹{item.l_price}</h1>}
                                 <button onClick={()=>{countDecreaser();removeFromCart(item.l_id);}} className='border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold m-1'>Remove from cart</button>  
                            </div>
                        )
                    }
                    {
                        item.t_id &&(
                            <div className="televisions">
                                 <img src={item.t_img} alt={item.t_name} className='img-fluid' />
                                 <p className='fw-bold'>{item.t_name}</p>
                                 {item.t_price && <h1>₹{item.t_price}</h1>}
                                 <button onClick={()=>{countDecreaser();removeFromCart(item.t_id);}} className='border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold m-1'>Remove from cart</button>  
                            </div>
                        )
                    }
                    {
                        item.sw_id &&(
                            <div className="televisions">
                                 <img src={item.sw_img} alt={item.sw_name} className='img-fluid' />
                                 <p className='fw-bold'>{item.sw_name}</p>
                                 {item.sw_price && <h1>₹{item.sw_price}</h1>}
                                 <button onClick={()=>{countDecreaser();removeFromCart(item.sw_id);}} className='border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold m-1'>Remove from cart</button>  
                            </div>
                        )
                    }
                    {
                        item.b_id &&(
                            <div className="bluetooths">
                                 <img src={item.b_img} alt={item.b_name} className='img-fluid' />
                                 <p className='fw-bold'>{item.b_name}</p>
                                 {item.b_price && <h1>₹{item.b_price}</h1>}
                                 <button onClick={()=>{countDecreaser();removeFromCart(item.b_id);}} className='border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold m-1'>Remove from cart</button>  
                            </div>
                        )
                    }
                    {
                        item.p_id &&(
                            <div className="powerBanks">
                                 <img src={item.p_img} alt={item.p_name} className='img-fluid' />
                                 <p className='fw-bold'>{item.p_name}</p>
                                 {item.p_price && <h1>₹{item.p_price}</h1>}
                                 <button onClick={()=>{countDecreaser();removeFromCart(item.p_id);}} className='border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold m-1'>Remove from cart</button>  
                            </div>
                        )
                    }
                   </div>
                )
            })
        }
        <div className='text-center'>
            {total!==0 ? <h1>Total Price : ₹{total}</h1>:null}
            {/* {total!=0 && <h1>Total Price : ₹{total}</h1>} */}
        </div>    
    </div>
  );
}
export default Cart;
