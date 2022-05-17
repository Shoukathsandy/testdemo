import React from 'react'

export default function Header(props) {
  return (
      <header className='row block center'>
    <div>
      <a href="#/">small shopping cart</a>
    </div>
    <div className='side'>
        <a href="#/cart">Cart</a> <a href="#/signin">signin</a>
       
    </div>
    </header>
  );
}
