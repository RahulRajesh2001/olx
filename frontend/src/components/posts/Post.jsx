import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Heart from '../../assets/Heart.jsx';
import './Post.css';

const baseUrl = import.meta.env.VITE_BASEURL;

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token !== null;
};

const ProductPost = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('Token from local storage:', token);

      const config = isAuthenticated() ? { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } } : {};
      const response = await axios.get(`${baseUrl}/api/v1/products`, config);
      setProducts(response.data.products);
    } catch (err) {
      console.log("Error in fetching data", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProductCards = () => {
    return (
      <div className="cards">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.image} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{product.price}</p>
              <span className="kilometer">{product.type}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              <span>{product.date}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderRecommendationCards = () => {
    return (
      <div className="cards">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.image} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.type}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              <span>{product.date}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        {isAuthenticated() ? renderProductCards() : <p>Please log in to view products</p>}
      </div>
      {/* Recommendation Section */}
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        {renderRecommendationCards()}
      </div>
    </div>
  );
};

export default ProductPost;
