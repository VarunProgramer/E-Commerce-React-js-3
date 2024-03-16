import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import stat_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = ({ product }) => {
    const {addToCart} = useContext(ShopContext)
    return (
        <div className="product_display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img src={product.image} alt="" className="product-display-main-img" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={stat_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="old-price">${product.old_price}</div>
                    <div className="new-price">${product.new_price}</div>
                </div>
                <div className="product-r-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio placeat provident expedita assumenda minima nulla accusantium dolore inventore quis. Eum, ea. Repudiandae ratione neque quaerat unde eligendi cumque incidunt eveniet cum asperiores nemo dolor reprehenderit magnam repellendus rem sed.
                </div>
                <div className="product-size">
                    <h1>Select Size</h1>
                    <div className="product-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=> {addToCart(product.id)}}>ADD TO CART</button>
                <p className='product-display-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
                <p className='product-display-right-category'><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay