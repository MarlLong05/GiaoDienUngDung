import React from 'react'

const ProductItem = ({products, onDelete}) => {
  return (
    <li key={products.id} className='card'>
        <img src={products.image} alt="" />
        <p>{products.name}</p>
        <p>{products.price}</p>
        <p>{products.category}</p>
        <button onClick={()=>onDelete(products.id)}>Delete</button>

    </li>
  )
}

export default React.memo(ProductItem)
