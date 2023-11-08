import SearchIcon from '@mui/icons-material/Search';
import React,{useState} from "react"
import { powerBanksDetails } from './PowerBanksDetails'
import './PowerBanks.css'
import { useCartItems } from '../../Cart/CartContextItems'
import { useCartCounter } from '../../Cart/CartContextCounter'
export default function Bluetooths(){
    const{countIncreaser}=useCartCounter()
    const{addToCart}=useCartItems()
    const[searchQuery,setSearchQuery]=useState("")
    const filteredPowerBanks=searchQuery.trim().length>0 ? 
    (powerBanksDetails.filter((value) => {
        return value.p_name.toUpperCase().includes(searchQuery.trim().toUpperCase())
    })
    ):searchQuery.trim().length===0 ?
    (powerBanksDetails.map((value) => {
        return value
    })
    ):null
    return(
        <div className="container-fluid">
            <div className="row">
                <div className='searchBar col-xs-12 col-sm-12 col-md-12 text-center'>
                    <SearchIcon/>  
                    <input type="search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='p-1 mb-3' placeholder='Search for Powerbanks'/>
                </div>
                {
                    filteredPowerBanks.length ?(filteredPowerBanks.map((p)=>{
                        return(
                            <div className="col-xs-12 col-sm-6 col-md-4" key={p.p_id}>
                                <div className="powerBank overflow-hidden">
                                    <img src={p.p_img} alt={p.p_name} className='img-fluid'/>
                                    <p className="fw-bold p_name">{p.p_name}</p>
                                    <h1 className='alignPricePowerBanks'>₹{p.p_price}</h1>
                                </div>
                                <div className='details'>
                                    <ul className='list-unstyled'>
                                        <li><b>Bluetooth Capacity : </b>{p.p_details.capacity}</li>
                                        <li><b>Weight : </b>{p.p_details.weight}</li>
                                        <li><b>Battery Type : </b>{p.p_details.batteryType}</li>
                                    </ul>
                                </div>
                                <div className="powerBank">    
                                    <button className='alignBtnPowerBanks border-0 bg-success rounded-2 px-5 py-2 text-white fw-bold mb-2' onClick={()=>{countIncreaser();addToCart(p)}}>Add to cart</button> 
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