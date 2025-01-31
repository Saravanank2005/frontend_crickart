import React, { useContext } from 'react';
import './ProductDisplay.css'
import start_icon from "../assets/star_icon.png"
import start_dull_icon from "../assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    // Common description for all products
    const commonDescription = "This is a high-quality product designed to meet your needs. Whether you're a professional or an enthusiast, this item offers great performance and durability.";

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_dull_icon} alt="" />
                    <p>(999+)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                    <div className="productdisplay-right-price-new">₹{product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    <p>{commonDescription}</p>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span> Bats, Balls, Kits</p>
                <p className='productdisplay-right-category'><span>Tags :</span> Professional, Cricket</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
