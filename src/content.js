import React, { Component } from "react";
import Breadcrumb from "./breadcrumb.js";
import Product from "./product.js";
import SideBar from "./sideBar.js";
//import Description from "./description.js";
import { data } from "../data/productData.js";

export default class content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Breadcrumb />
        <Product
          data={data}
          addToCart={this.props.addToCart}
          buyNow={this.props.buyNow}
          selected={this.props.selected}
        />
      </div>
    );
  }
}
