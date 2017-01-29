import React from "react";

import ProductsContainer from "./products/container/ProductsContainer";
import CartContainer from "../containers/CartContainer";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <ProductsContainer />
        <CartContainer/>
      </div>
    );
  }
}
