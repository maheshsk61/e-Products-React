import SearchIcon from '@mui/icons-material/Search';
import React,{useState} from "react"
import { bluetoothsDetails } from './BluetoothsDetails'
import './Bluetooths.css'
import { useCartItems } from '../../Cart/CartContextItems'
import { useCartCounter } from '../../Cart/CartContextCounter'
export default function Bluetooths(){
    const{countIncreaser}=useCartCounter()
    const{addToCart}=useCartItems()
    const[searchQuery,setSearchQuery]=useState("")
    const filteredBluetooths=searchQuery.trim().length>0 ? 
    (bluetoothsDetails.filter((value) => {
        return value.b_name.toUpperCase().includes(searchQuery.trim().toUpperCase())
    })
    ):searchQuery.trim().length===0 ?
    (bluetoothsDetails.map((value) => {
        return value
    })
    ):null
    return(
        <div className="container-fluid">
            <div className="row">
                <div className='searchBar col-xs-12 col-sm-12 col-md-12 text-center'>
                    <SearchIcon/>  
                    <input type="search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='p-1 mb-3' placeholder='Search for Bluetooths'/>
                </div>
                {
                    filteredBluetooths.length ? (filteredBluetooths.map((b)=>{
                        return(
                            <div className="col-xs-12 col-sm-6 col-md-4" key={b.b_id}>
                                <div className="bluetooth overflow-hidden">
                                    <img src={b.b_img} alt={b.b_name} className='img-fluid'/>
                                    <p className="fw-bold b_name">{b.b_name}</p>
                                    <h1 className='alignPriceBluetooths'>₹{b.b_price}</h1>
                                </div>
                                <div className="details">
                                    <ul className='list-unstyled'>
                                        <li><b>Bluetooth Version : </b>{b.b_details.version}</li>
                                        <li><b>Water Resistant : </b>{b.b_details.waterResistant}</li>
                                        <li><b>Charging Time : </b>{b.b_details.chargingTime}</li>
                                        <li><b>Play Time : </b>{b.b_details.playTime}</li>
                                    </ul>
                                </div>    
                                <div className="bluetooth">    
                                    <button className='alignBtnBluetooths border-0 bg-success rounded-2 px-5 py-2 text-white fw-bold mb-2' onClick={()=>{countIncreaser();addToCart(b)}}>Add to cart</button> 
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