import React from 'react';

const Products = ({ products }) => {
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
        <button type="button" disabled={!inStock}>
          Add to cart
        </button>
      </div>
    )
  );
};

export default Products;
