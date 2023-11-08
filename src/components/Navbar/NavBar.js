import './NavBar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartCounter } from '../Cart/CartContextCounter';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
function NavBar() {
  const{cartCount}=useCartCounter()
  return (
      <div className="bg-dark p-1 mb-5 navbar d-flex justify-content-around">
          <div className='Shopify'>
            <Link to='/' className='text-decoration-none'>
              <div className='text-white fw-bold'>Shopify</div>
            </Link>
          </div>
          <div className="login">
            <Link to="/Login" className='text-decoration-none text-dark'>
              <div className='text-white fw-bold'>
                <LoginIcon/>
                LOGIN
              </div>
            </Link>
          </div>
          <div className='ShoppingCartIcon'>
            <Link to="/Cart" className='text-decoration-none'>
              <div className='text-white fw-bold'>
                <ShoppingCartIcon/>
                <span className='text-white fw-bold'>
                  {cartCount === 0?"0":cartCount}
                </span>
              </div>
            </Link>
          </div>  
      </div>
    )
}
export default NavBar


