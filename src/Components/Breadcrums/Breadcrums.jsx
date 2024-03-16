import React from 'react'
import "./Breadcrums.css"
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = ({product}) => {
  return (
    <div className="breadcrum">
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /><span className='product_BC'>{product.category}</span> <img src={arrow_icon} alt="" /><span className='product_BC'>{product.name}</span>

    </div>
  )
}

export default Breadcrums