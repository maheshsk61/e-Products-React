import SearchIcon from '@mui/icons-material/Search';
import React,{useState} from "react"
import './SmartWatches.css'
import { smartWatchesDetails } from './SmartWatchesDetails'
import { useCartCounter } from '../../Cart/CartContextCounter'
import { useCartItems } from '../../Cart/CartContextItems'
function Smartwatches(){
    const{countIncreaser}=useCartCounter()
    const{addToCart}=useCartItems()
    const[searchQuery,setSearchQuery]=useState("")
    const filteredWatches=searchQuery.trim().length>0 ? 
    (smartWatchesDetails.filter((value) => {
        return value.sw_name.toUpperCase().includes(searchQuery.trim().toUpperCase())
    })
    ):searchQuery.trim().length===0 ?
    (smartWatchesDetails.map((value) => {
        return value
    })
    ):null
    return(
        <div className="container-fluid">
            <div className="row">
                <div className='searchBar col-xs-12 col-sm-12 col-md-12 text-center'>
                    <SearchIcon/>  
                    <input type="search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='p-1 mb-3' placeholder='Search for Watches'/>
                </div>
                {
                    filteredWatches.length ?(filteredWatches.map((sw)=>{
                        return(
                            <div className="col-xs-12 col-sm-6 col-md-4" key={sw.sw_id}>
                                <div className="smartwatch overflow-hidden">
                                    <img src={sw.sw_img} alt={sw.sw_name} className='img-fluid'/>
                                    <p className='fw-bold sw_name'>{sw.sw_name}</p>
                                    <h1 className='alignPriceSmartWatches'>₹{sw.sw_price}</h1>
                                </div>
                                <div className="details">
                                    <ul className='list-unstyled'>
                                        <li><b>OS : </b>{sw.sw_details.os}</li>
                                        <li><b>Ideal for : </b>{sw.sw_details.idealFor}</li>
                                        <li><b>Battery Type : </b>{sw.sw_details.batteryType}</li>
                                        <li><b>Battery Life : </b>{sw.sw_details.batteryLife}</li>
                                        <li><b>Charge Time : </b>{sw.sw_details.chargeTime}</li>
                                    </ul>
                                </div>        
                                <div className='smartwatch'>    
                                    <button className='alignBtnSmartWatches border-0 bg-success rounded-2 px-5 py-2 text-white fw-bold mb-2' onClick={()=>{countIncreaser();addToCart(sw)}}>Add to cart</button>
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
export default Smartwatches