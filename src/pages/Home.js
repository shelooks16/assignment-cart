import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../db/categories.json';

const Home = () => {
  return (
    <div>
      <div>
        {categories.map(c => (
          <div key={c.id}>
            <Link to={`/category/${c.id}`}>{c.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
