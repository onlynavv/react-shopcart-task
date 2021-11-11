import React from 'react'
import Navbar from './Navbar'
import ProductItem from './ProductItem'
import { products } from './shopData'
import './index.css'

const Product = () => {
    console.log(products)
    return (
        <>
            <Navbar />
            <section className="product-section">
                <div className='container'>
                {products.map((item)=>{
                    const {id} = item
                    return <ProductItem key={id} {...item} />
                })}
                </div>
            </section>
        </>
    )
}

export default Product
