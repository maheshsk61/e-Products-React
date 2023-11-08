import { laptopsDetails } from './LaptopsDetails'
import './Laptops.css'
import { useCartCounter } from '../../Cart/CartContextCounter'
import { useCartItems } from '../../Cart/CartContextItems'
import SearchIcon from '@mui/icons-material/Search';
import React,{useState} from "react"
function Laptops() {
    const{countIncreaser}=useCartCounter()
    const{addToCart}=useCartItems()
    const[searchQuery,setSearchQuery]=useState("")
    const filteredLaptops=searchQuery.trim().length>0 ? 
    (laptopsDetails.filter((value) => {
        return value.l_name.toUpperCase().includes(searchQuery.trim().toUpperCase())
    })
    ):searchQuery.trim().length===0 ?
    (laptopsDetails.map((value) => {
        return value
    })
    ):null
  return (
    <div className="container-fluid">
        <div className="row">
            <div className='searchBar col-xs-12 col-sm-12 col-md-12 text-center'>
                <SearchIcon/>  
                <input type="search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='p-1 mb-3' placeholder='Search for Laptops'/>
            </div>
            {
               filteredLaptops.length ? (filteredLaptops.map((l)=>{
                    return(
                        <div className="col-col-xs-12 col-sm-6 col-md-4" key={l.id}>
                            <div className="laptop overflow-hidden">
                                <img src={l.l_img} alt={l.l_name} className='img-fluid'/>
                                <p className='fw-bold l_name'>{l.l_name}</p>
                                <h1 className='alignPriceLaptops'>₹{l.l_price}</h1>
                            </div>    
                            <div className="details">
                                <ul className='list-unstyled'>
                                    <li><b>Processor : </b>{l.l_details.processor}</li>
                                    <li><b>Storage : </b>{l.l_details.memory}</li>
                                    <li><b>OS : </b>{l.l_details.os}</li>
                                    <li><b>Display : </b>{l.l_details.display}</li>
                                </ul>        
                            </div> 
                            <div className='laptop'> 
                                <button className='alignBtnLaptops border-0 bg-success rounded-2 px-5 py-2 text-white fw-bold mb-2' onClick={()=>{countIncreaser();addToCart(l)}}>Add to cart</button>  
                            </div>
                        </div>
                    )
                })
               ):<h1 className='text-center'>No Results found</h1>
            }
        </div>
    </div>
  )
}
export default Laptops