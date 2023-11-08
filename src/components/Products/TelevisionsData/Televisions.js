import SearchIcon from '@mui/icons-material/Search';
import React,{useState} from "react"
import { televisionsDetails } from './TelevisionsDetails'
import { useCartCounter } from '../../Cart/CartContextCounter'
import { useCartItems } from '../../Cart/CartContextItems'
import './Televisions.css'
function Televisions() {
    const{countIncreaser}=useCartCounter()
    const{addToCart}=useCartItems()
    const[searchQuery,setSearchQuery]=useState("")
    const filteredTelevisions=searchQuery.trim().length>0 ? 
    (televisionsDetails.filter((value) => {
        return value.t_name.toUpperCase().includes(searchQuery.trim().toUpperCase())
    })
    ):searchQuery.trim().length===0 ?
    (televisionsDetails.map((value) => {
        return value
    })
    ):null
  return (
    <div className="container-fluid">
        <div className="row">
            <div className='searchBar col-xs-12 col-sm-12 col-md-12 text-center'>
                <SearchIcon/>  
                <input type="search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='p-1 mb-3' placeholder='Search for Televisions'/>
            </div>
            {
               filteredTelevisions.length ? (filteredTelevisions.map((t)=>{
                    return(
                        <div className="col-xs-12 col-sm-6 col-md-4" key={t.t_id}>
                            <div className="television overflow-hidden">
                                <img src={t.t_img} alt={t.t_name} className='img-fluid'/>
                                <p className='fw-bold t_name'>{t.t_name}</p>
                                <h1 className='alignPriceTelevisions'>₹{t.t_price}</h1>
                            </div>    
                            <div className='details'>
                                <ul className='list-unstyled'>
                                    <li><b>Size : </b>{t.t_details.size}</li>
                                    <li><b>Color : </b>{t.t_details.color}</li>
                                    <li><b>Resolution : </b>{t.t_details.resolution}</li>
                                    <li><b>Processor : </b>{t.t_details.processor}</li>
                                    <li><b>RAM : </b>{t.t_details.ram}</li>
                                    <li><b>ROM : </b>{t.t_details.rom}</li>
                                    <li><b>OS : </b>{t.t_details.os}</li>
                                </ul>  
                            </div>
                            <div className='television'>    
                                <button className='alignBtnTelevisions border-0 bg-success rounded-2 px-5 py-2 text-white fw-bold mb-2 ' onClick={()=>{countIncreaser();addToCart(t)}}>Add to cart</button>  
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
export default Televisions