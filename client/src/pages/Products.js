import React from "react";
import ProductList from "../components/ProductList";
import Category from "../components/Category";
import Cart from "../components/Cart";

const Products = () => {
  return (
    <div className="container">
      <Category />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Products;
