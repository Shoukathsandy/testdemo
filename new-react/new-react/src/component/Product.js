import React from 'react'

export default function Product() {
    const {product}=props;
  return (
    <div>
      <img className='small' src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <button>Add to Cart</button>
    </div>
  )
}
