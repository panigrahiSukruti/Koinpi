import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

function ProductCard({ product }) {
  const addToCart = async () => {
    try {
      const response = await axios.put('http://localhost:5000/cartItems', {
        items: [{ offer: product._id, quantity: 1 }]
      });
      if (response.status === 200) {
        alert('Item added to cart successfully');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      alert('Failed to add item to cart');
    }
  };

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={product.imageToDisplay} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
        <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
        <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
