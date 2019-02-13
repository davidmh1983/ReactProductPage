import React, { Component } from "react";
import Content from "./content.js";
import Header from "./header.js";
import SideBar from "./sideBar.js";
import "./paymentApp.scss";

export default class paymentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      openModal: 0,
      totalCosts: 0,
      shippingCost: 0,
      totalCostsWithShipping: 0
    };
  }

  addToCart = data => {
    let newData = this.state.selected;
    let total = parseFloat(this.state.totalCosts) + parseFloat(data.offerPrice);
    let totalAll = parseFloat(this.state.shippingCost) + total;
    newData.push(data);
    this.setState({
      selected: newData,
      totalCosts: total,
      totalCostsWithShipping: totalAll
    });
  };

  buyNow = () => {
    this.setState({
      openModal: 1
    });
  };

  emptySelection = () => {
    this.setState({
      selected: [],
      totalCosts: 0,
      shippingCost: 0,
      totalCostsWithShipping: 0
    });
  };

  updateCosts = shippingCosts => {
    let total = parseFloat(shippingCosts) + parseFloat(this.state.totalCosts);
    this.setState({
      shippingCost: shippingCosts,
      totalCostsWithShipping: total
    });
  };

  closeModal = step => {
    this.setState({
      openModal: 0
    });
    if (step === 4) {
      this.emptySelection();
    }
  };

  render() {
    return (
      <div className="productDetail">
        <Header quantity={this.state.selected.length} />
        <Content
          selected={this.state.selected}
          addToCart={this.addToCart}
          buyNow={this.buyNow}
        />
        <SideBar
          openModal={this.state.openModal}
          closeModal={this.closeModal}
          data={this.state.selected}
          total={this.state.totalCosts}
          shippingCost={this.state.shippingCost}
          updateCost={this.updateCosts}
          totalCost={this.state.totalCostsWithShipping}
        />
      </div>
    );
  }
}
