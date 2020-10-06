import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeProducts from '../db/products.json';
import categories from '../db/categories.json';
import { useFilters } from '../lib/useFilters';
import FilterCheckbox from '../components/FilterCheckbox';
import Products from '../components/Products';

function getComputedProducts(products, filters) {
  // const result = products; would create a reference thus doesn't apply
  // [...someArray] creates a new array from elements of someArray
  let result = [...products];

  if (filters.delivery) {
    result = result.filter(p => p.delivery === true);
  }

  if (filters.inStock) {
    result = result.filter(p => p.inStock === true);
  }

  if (filters.expensive) {
    result = result.filter(p => p.price > 100);
  }

  return result;
}

const Category = () => {
  const { id } = useParams();

  const category = categories.find(c => c.id === id);
  const categoryName = category.name;

  const [products] = useState(fakeProducts.filter(p => p.categoryId === id));
  const [filter, dispatchFilter] = useFilters({
    delivery: false,
    inStock: false,
    expensive: false,
  });
  const filteredProducts = getComputedProducts(products, filter);

  const onCheckboxChange = useCallback(
    ev => {
      const checkbox = ev.target;

      dispatchFilter({
        type: 'SET',
        filterName: checkbox.name,
        value: checkbox.checked,
      });
    },
    [dispatchFilter]
  );

  return (
    <div>
      <div>
        <h3>Filters</h3>
        <FilterCheckbox
          id="delivery"
          name="delivery"
          checked={filter.delivery}
          onChange={onCheckboxChange}
          label="Delivery"
        />
        <FilterCheckbox
          id="inStock"
          name="inStock"
          checked={filter.inStock}
          onChange={onCheckboxChange}
          label="In stock only"
        />
        <FilterCheckbox
          id="expensive"
          name="expensive"
          checked={filter.expensive}
          onChange={onCheckboxChange}
          label="Expensive (100+ USD)"
        />
      </div>
      <div>
        <h3>{categoryName}</h3>
        <div>
          <Products products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Category;
