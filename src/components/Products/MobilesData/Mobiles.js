import { useCartCounter } from '../../Cart/CartContextCounter'
import { useCartItems } from '../../Cart/CartContextItems'
import { mobilesDetails } from '../MobilesData/MobilesDetails'
import './Mobiles.css'
import React,{useState} from "react"
import SearchIcon from '@mui/icons-material/Search';
function Mobiles() {
  const{countIncreaser}=useCartCounter()
  const{addToCart}=useCartItems()
  const[searchQuery,setSearchQuery]=useState("")
  const filteredMobiles=searchQuery.trim().length>0 ? 
  (mobilesDetails.filter((value) => {
    return value.m_name.toUpperCase().includes(searchQuery.trim().toUpperCase())
  })
  ):searchQuery.trim().length===0 ?
  (mobilesDetails.map((value) => {
    return value
  })
  ):null
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className='searchBar col-xs-12 col-sm-12 col-md-12 text-center'>
          <SearchIcon/>  
          <input type="search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='p-1 mb-3' placeholder='Search for Mobiles'/>
        </div>
        {
          filteredMobiles.length ? (filteredMobiles.map((m) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-4" key={m.m_id}>
                <div className="mobile overflow-hidden">
                  <img src={m.m_img} alt={m.m_name} className='img-fluid'/>
                  <p className='fw-bold m_name'>{m.m_name}</p>
                  <h1 className='alignPriceMobiles'>₹{m.m_price}</h1>
                </div>  
                <div className="details">
                    <ul className='list-unstyled'>
                      <li><b>Storage : </b>{m.m_details.memory}</li>
                      <li><b>Expandable memory : </b>{m.m_details.expandable}</li>
                      <li><b>Display : </b> {m.m_details.display}</li>
                      <li><b>Camera : </b>{m.m_details.camera}</li>
                      <li><b>Battery capacity : </b>{m.m_details.battery}</li>
                      <li><b>Processor : </b>{m.m_details.processor}</li>
                    </ul>
                </div>
                <div className='mobile'>    
                  <button className='alignBtnMobiles border-0 bg-success rounded-2 px-5 py-2 text-white fw-bold mb-2' onClick={()=>{countIncreaser();addToCart(m)}}>Add to cart</button>
                </div>
              </div>
            );
          })
         ):<h1 className='text-center'>No Results found</h1>
        }
      </div>
    </div>
  );
}
export default Mobiles;