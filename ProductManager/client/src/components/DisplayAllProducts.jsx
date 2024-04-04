import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className="mb-4">All Products</h2>
      <ul className="list-unstyled">
        {products.map(product => (
          <li key={product._id} className="mb-3">
            <Link to={`/products/${product._id}`} className="btn btn-primary">
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayAllProducts;
