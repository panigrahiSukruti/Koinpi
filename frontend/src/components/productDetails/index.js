import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assests/marketplace";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faOpencart,
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

function ProductDetail() {
  const { productId } = useParams(); // Get productId from URL params
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <Container>
      <Row>
        {/* Left Side - Category, Language, Region */}
        <Col md={4}>
          <Card
            border="primary shadow-lg p-3 mb-5 bg-body rounded"
            style={{ height: "100%" }}
          >
            <Card.Body>
              <Card.Title>Category: {product.category}</Card.Title>
              <Card.Text>Language: {product.language}</Card.Text>
              <Card.Text>Region: {product.region}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Middle Side - Connection Info */}
        <Col md={4}>
          <Card
            border="primary shadow-lg p-3 mb-5 bg-body rounded"
            style={{ height: "100%" }}
          >
            <Card.Body>
              <Card.Title className="text-bold">{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Container>
                <Button variant="primary m-2" href={product.facebook_url}>
                  <FontAwesomeIcon icon={faFacebook} />{" "}
                </Button>
                <Button variant="primary m-2" href={product.linkedin_url}>
                  <FontAwesomeIcon icon={faLinkedin} />{" "}
                </Button>
                <Button variant="primary m-2" href={product.x_url}>
                  <FontAwesomeIcon icon={faXTwitter} />{" "}
                </Button>
              </Container>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Side - Add to Cart Button and Price */}
        <Col md={4}>
          <Card
            border="primary shadow-lg p-3 mb-5 bg-body rounded"
            style={{ height: "100%" }}
          >
            <Card.Body>
              <Container className="d-flex justify-content-end">
                <Button variant="primary m-1">
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
                <Button variant="primary m-1">
                  <FontAwesomeIcon icon={faShare} />
                </Button>
              </Container>
              <Card.Text className="text-bold">
                Price: ${product.price}
              </Card.Text>
              <Button variant="primary">
                <FontAwesomeIcon icon={faOpencart} /> Add to Cart
              </Button>
              <div className="mt-3">
                <h5 className="text-center">Visitor Metrics</h5>
                <hr />
                <Row>
                  <Col>
                    <p>Visitors:</p>
                    <h3>1234</h3>
                  </Col>
                  <Col>
                    <p>Number of Days:</p>
                    <h3>30</h3>
                  </Col>
                  <Col>
                    <p>KPR Metric:</p>
                    <h3>7.8/10</h3>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
