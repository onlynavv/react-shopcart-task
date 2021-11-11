import React,{useState} from 'react'
import './ProductItem.css'
import Ratings from './Ratings'
import { useGlobalContext } from './context'

const ProductItem = ({id, name, price, rating, image}) => {

    const {addItem} = useGlobalContext()

    const [showAddBtn, setShowAddBtn] = useState(false)

    return (
        <div className="product-container">
            <img src={image} alt={name}></img>
            <div className="product-body align-center">
                <h5>{name}</h5>
                <Ratings value={rating} />
                <p>₹ {price}</p>
            </div>
            <div className="product-buttons align-center">    
                <button onClick={()=>{addItem(id, name, price, rating, image,setShowAddBtn,showAddBtn)}} disabled={showAddBtn} className={`add-btn ${showAddBtn && "btn-disable"}`}>Add Item</button>
            </div>
        </div>
    )
}

export default ProductItem
