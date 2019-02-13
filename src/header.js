import React, { Component } from "react";
import "./header.scss";
export default class header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cartStatus = this.props.quantity > 0 ? "cartFull" : "cartEmpty";
    let quantity = this.props.quantity > 0 ? this.props.quantity : "";
    return (
      <div className="header">
        <span className="LogoR"> MyLogo </span>
        <form>
          <input placeholder="Search" type="text" />
          <button type="submit">Search</button>
        </form>
        <div>
          <span className="cart"> &#9972;</span>
          <span className={cartStatus + " cartQuantity"}>{quantity}</span>
        </div>
      </div>
    );
  }
}
