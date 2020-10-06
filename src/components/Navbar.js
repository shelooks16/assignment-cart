import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as CartSVG } from '../images/cart.svg';

const LINKS = [{ link: '/', text: 'Home' }];

const Navbar = () => {
  return (
    <div>
      {LINKS.map(({ link, text }) => (
        <div key={link}>
          <Link to={link}>{text}</Link>
        </div>
      ))}
      <div>
        <CartSVG width={25} />
      </div>
    </div>
  );
};

export default Navbar;
