import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Product ID: {id}</h1>

      <button onClick={() => navigate("/checkout")}>
        Mua hàng
      </button>
    </div>
  )
}

export default ProductDetail