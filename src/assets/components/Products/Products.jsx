import React from "react";
import productsData from "../ProductsData/ProductsData";
// import {productsData} from "../ProductsData/ProductsData";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  return (
    <div className="container">
      <div className="all-products">
        {productsData.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
