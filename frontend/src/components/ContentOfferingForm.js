import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function ContentOfferingForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    region: 'USA',
    views: 0,
    kpRating: 0.0,
    pressRelease: '',
    listedBy: '',
    category: 'Content Distribution'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/content-offerings', formData)
      .then(response => {
        console.log(response.data);
        // Handle success (e.g., display a success message, clear the form, etc.)
      })
      .catch(error => {
        console.error(error);
        // Handle error (e.g., display an error message)
      });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Create Content Offering</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formRegion">
              <Form.Label>Region</Form.Label>
              <Form.Control
                as="select"
                name="region"
                value={formData.region}
                onChange={handleChange}
              >
                <option value="USA">USA</option>
                <option value="DUBAI">Dubai</option>
                <option value="INDIA">India</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formViews">
              <Form.Label>Views</Form.Label>
              <Form.Control
                type="number"
                name="views"
                value={formData.views}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formKpRating">
              <Form.Label>KP Rating</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                name="kpRating"
                value={formData.kpRating}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPressRelease">
              <Form.Label>Press Release</Form.Label>
              <Form.Control
                type="text"
                name="pressRelease"
                value={formData.pressRelease}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formListedBy">
              <Form.Label>Listed By</Form.Label>
              <Form.Control
                type="text"
                name="listedBy"
                value={formData.listedBy}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Content Distribution">Content Distribution</option>
                <option value="Ads">Ads</option>
                <option value="Youtube Influencer">Youtube Influencer</option>
                <option value="Telegram Influencer">Telegram Influencer</option>
                <option value="Instagram Influencer">Instagram Influencer</option>
                <option value="Twitter Influencer">Twitter Influencer</option>
                <option value="ICO Listing">ICO Listing</option>
                <option value="Exchange Listing">Exchange Listing</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContentOfferingForm;
