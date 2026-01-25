import React from 'react'
import './ProductList.css'

function ProductList() {
  const productData = [
    { id: 1, title: 'Product 1', cost: '$10' },
    { id: 2, title: 'Product 2', cost: '$15' },
    { id: 3, title: 'Product 3', cost: '$20' },
    { id: 4, title: 'Product 4', cost: '$12' },
    { id: 5, title: 'Product 5', cost: '$18' },
    { id: 6, title: 'Product 6', cost: '$25' },
  ]

  return (
    <div className="container-1">
      <h1>Our Products</h1>
      <div className="product-grid">
        {productData.map(({ id, title, cost }) => {
          return (
            <div className="product-card" key={id}>
              <h3>{title}</h3>
              <span>{cost}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
