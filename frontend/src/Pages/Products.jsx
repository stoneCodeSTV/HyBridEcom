import React from 'react'
import { useEffect, useState } from 'react' 
import * as Realm from 'realm-web'

const Products = () => {

  const [products, setProducts]= useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const REALM_APP_ID = 'products-bkgdc';
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();

      try {
        const user = await app.logIn(credentials);
        const allProducts = await user.functions.getAllProducts();
        console.log('All Products:', allProducts);
        setProducts(allProducts);
      } catch (error) {
        console.log('An error occurred:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
<div className="product">
      <h3>Unique & Innovative </h3>
      {products.length > 0 ? (
        products.map(product => (
          <div key={product._id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h4>{product.name}</h4>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Availability: {product.available ? 'Available' : 'Out of stock'}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Products;