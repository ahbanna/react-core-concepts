import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";

const Product = (props) => {
  const { shortDescription, price, productImage, productName } = props.product;
  return (
    <div className="single-product">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={productImage} />
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <h6>Price: ${price}</h6>
          <Card.Text>{shortDescription}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
