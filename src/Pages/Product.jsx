import React, { useContext } from 'react'
import './CSS/Product.css'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = (props) => {
  const {all_product} =useContext(ShopContext)
  const productId = useParams()
  const id = productId.id
  const product = all_product.find((e) => Number(e.id) === Number(id))
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default Product