import React from 'react'
import './ProductCard.css'


export const ProductCard = () => {
  return (
    <div className="product-card">
        <img className='img-product' src="https://www.winauto.vn/wp-content/uploads/2024/06/10-sieu-xe-dep-nhat-va-co-gia-ban-dat-nhat-the-gioi-hien-nay.jpg" alt="" />
        <div className="content">
            <h3>Bugatti La Voiture Noire</h3>
            <h4>Rate: 18.68 Triệu USD <button className='btn-product'>Add to Cart</button></h4> 
        </div>
    </div>
  )
}
export default ProductCard