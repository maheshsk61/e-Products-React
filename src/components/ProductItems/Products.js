import React,{useState} from "react"
import { productsDetails } from './ProductsDetails';
import './Products.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
function Products() {
  const[searchQuery,setSearchQuery]=useState("")
  const filteredProducts=searchQuery.trim().length>0 ? 
  (productsDetails.filter((value) => {
    return value.p_name.toUpperCase().includes(searchQuery.trim().toUpperCase())
  })
  ):searchQuery.trim().length===0 ?
  (productsDetails.map((value) => {
    return value
  })
  ):null
    return (
    <div className="container-fluid">
      <div className="row">
        <div className='searchBar col-xs-12 col-sm-12 col-md-12 text-center'>
          <SearchIcon/>  
          <input type="search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='p-1 mb-3' placeholder='Search for Products'/>
        </div>
        {
           filteredProducts.length ?(filteredProducts.map((p)=>{
              return(
                <div className="col-xs-12 col-sm-6 col-md-4" key={p.p_id}>
                  <div className="product overflow-hidden">
                    <Link to={`/${p.p_name}`} className="text-decoration-none text-dark">
                      <img src={p.p_img} alt={p.p_name} className='img-fluid  img-thumbnail card '/>
                      <h1 className="text-center">{p.p_name}</h1>
                    </Link>
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
export default Products;
