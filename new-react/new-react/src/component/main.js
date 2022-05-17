import React from 'react'

export default function Main(props) {
  const {products}=props;
  return (
    <main className='col-2 block'>
      <h2>Product</h2>
      <div className='row'>
        {products.map((product)=>(
          <product key={product.id} product={product}></product>
        ))}
      </div>
    </main>
  );
}
