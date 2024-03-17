import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)
    return (
        <div className="cart-item">
            <div className="cart-item-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                    <div>
                        <div className="cart-item-format cart-item-format-main">
                            <img src={e.image} alt="" className="cart-icon-product-icon" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cart-items-quantity">{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img onClick={() => {removeFromCart(e.id)}} className='remove-icon' src={remove_icon} alt="" />
                        </div>
                        <hr />
                    </div>
                    )
                }
                return null
            })}
            <div className="cart-items-down">
                <div className="cart-item-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cart-items-total-items">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-items">
                            <p>Shipping Fee</p>
                            <p>Fee</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-items">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-items-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cart-item-promo-box">
                        <input type="text" placeholder='PROMO CODE' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem