import React, { useCallback } from 'react';
import { useCartDispatch } from '../lib/cart.context';

const Products = ({ products }) => {
  const dispatchCart = useCartDispatch();

  const handleAddToCart = useCallback(
    (id, price, inStock) => {
      if (!inStock) {
        return;
      }

      dispatchCart({ type: 'ADD_ONE', id, price });
    },
    [dispatchCart]
  );

  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return products.map(
    ({
      currency,
      delivery,
      inStock,
      name,
      price,
      thumbnail,
      ...restOfProduct
    }) => (
      <div key={restOfProduct.id}>
        <img src={thumbnail} alt={name} width={50} />
        <div>{name}</div>
        <div>
          {currency} {price}
        </div>
        <div>{inStock ? 'In stock' : 'Out of stock'}</div>
        {delivery && <div>Delivery available</div>}
        <button
          type="button"
          disabled={!inStock}
          onClick={() => handleAddToCart(restOfProduct.id, price, inStock)}
        >
          Add to cart
        </button>
      </div>
    )
  );
};

export default Products;
