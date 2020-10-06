import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as CartSVG } from '../images/cart.svg';
import { useCart } from '../lib/cart.context';

const LINKS = [{ link: '/', text: 'Home' }];

const Navbar = () => {
  const cart = useCart();
  const cartItemsTotal = cart.reduce((total, item) => total + item.quantity, 0);
  const cartPriceTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {LINKS.map(({ link, text }) => (
        <div key={link}>
          <Link to={link}>{text}</Link>
        </div>
      ))}
      <div>
        <Link to="/checkout">
          {cartItemsTotal}
          <CartSVG width={25} />
          {cartPriceTotal}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
