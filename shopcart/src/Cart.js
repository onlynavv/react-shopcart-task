import React,{useState} from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import './CartItem.css'
import { useGlobalContext } from './context'
import Ratings from './Ratings'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './index.css'
import './CartItem.css'

const Cart = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const {cart,removeItem} = useGlobalContext()
    return (
        <>
        <div className="cart-wrapper" onClick={openSidebar}>
            <FaShoppingCart />
            <div className='amount-container'>
                <p className='total-amount'>{cart.length}</p>
            </div>
        </div>

        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className='sidebar-header'>
                <h3>Your Cart</h3>
                <IconButton className='close-btn' onClick={closeSidebar}>
                    <CloseIcon />
                </IconButton>
            </div>
            <div className="cart-container">
                <ul>
                    {cart.map((item)=>{
                    console.log(item)
                    const {id,name,image,price, rating,showAddBtn,setShowAddBtn} = item
                    console.log(setShowAddBtn)
                    console.log(showAddBtn)
                        return(
                            <li className="product-container" key={id}>
                                <img src={image} alt={name}></img>
                                <div className="product-body align-center">
                                    <h5>{name}</h5>
                                    <Ratings value={rating} />
                                    <p>₹ {price}</p>
                                </div>
                                <div className="product-buttons align-center">
                                    <button className='remove-btn' onClick={()=>{removeItem(id,setShowAddBtn,showAddBtn)}}>Remove Item</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                
            </div>
        </aside>
        </>
    )
}

export default Cart
