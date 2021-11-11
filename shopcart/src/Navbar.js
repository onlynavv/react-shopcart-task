import React from 'react'
import './Navbar.css'
import Cart from './Cart'

const Navbar = () => {
    return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <h3>ShopCart</h3>
                    <div className='nav-container'>
                        <Cart />
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
