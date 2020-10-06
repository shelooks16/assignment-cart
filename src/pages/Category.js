import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeProducts from '../db/products.json';
import categories from '../db/categories.json';

const Category = () => {
  const { id } = useParams();

  const category = categories.find(c => c.id === id);
  const categoryName = category.name;

  const [products] = useState(fakeProducts.filter(p => p.categoryId === id));

  return (
    <div>
      <div>
        <h3>Filters</h3>
        <div>
          <input type="checkbox" id="delivery" name="delivery" checked />
          <label htmlFor="delivery">Delivery</label>
        </div>
      </div>
      <div>
        <h3>{categoryName}</h3>
        <div>
          {products.map(
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
