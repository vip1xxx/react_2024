// src/components/Product.js
import React from 'react';

const Product = ({ product }) => {
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2>{product.title}</h2>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Rating:</strong> {product.rating}</p>
            <img src={product.thumbnail} alt={product.title} style={{ width: '150px', height: '150px' }} />
            <div>
                <h4>Images:</h4>
                {product.images.map((image, index) => (
                    <img key={index} src={image} alt={`Product image ${index + 1}`} style={{ width: '100px', height: '100px', margin: '5px' }} />
                ))}
            </div>
        </div>
    );
};

export default Product;
