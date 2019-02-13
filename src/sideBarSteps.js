import React, { Component } from "react";
import "./sideBarSteps.scss";

export default class sideBarSteps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrySel: "",
      enableNext: 1,
      name: "",
      surname: "",
      email: "",
      city: "",
      address: "",
      cp: "",
      cardName: "",
      cardNumber: "",
      expiringDate: "",
      cvv: ""
    };
    this.checkForm(this.props.step);
  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    this.checkForm(this.props.step);
  };

  checkForm = step => {
    if (step === 2 || step === 3) {
      this.setState({
        enableNext: this.props.enable
      });
    }
    if (
      (step === 2 &&
        this.state.name !== "" &&
        this.state.surname !== "" &&
        this.state.email !== "" &&
        this.state.address !== "" &&
        this.state.city !== "" &&
        this.state.cp !== "") ||
      (step === 3 &&
        this.state.cardName !== "" &&
        this.state.cardNumber !== "" &&
        this.state.cvv !== "" &&
        this.state.expiringDate !== "")
    ) {
      this.setState({
        enableNext: 1
      });
    } else {
      if ((step === 2 || step === 3) && this.state.enableNext === 1) {
        this.setState({
          enableNext: 0
        });
      }
    }
    this.props.enableButton(this.state.enableNext);
  };

  countrySelection = code => {
    this.setState({
      countrySel: code
    });
    this.props.updateCost(this.uploadShippingCost(code));
  };

  uploadShippingCost = event => {
    switch (event.target.value) {
      case "ES":
        return 2.5;
      case "US":
        return 7;
      case "UK":
      case "FR":
        return 3;
      case "JP":
        return 7.5;
      default:
        return 0.0;
    }
  };

  render() {
    switch (this.props.step) {
      case 1:
        return this.step1();
      case 2:
        return this.step2();
      case 3:
        return this.step3();
      case 4:
        return this.step4();
    }
  }

  step1 = () => {
    return (
      <div className="sideBarStep1">
        {this.props.data.map((product, index) => {
          return (
            <div key={index} className="sideBarStep1Product">
              <div className="sideBarStep1ProductImg">
                <img alt={product.productName} src={product.imageProduct} />
              </div>
              <div className="sideBarStep1ProductData">
                <span className="sideBarStep1ProductDataBrand">
                  {product.brandName}
                </span>
                <span className="sideBarStep1ProductDataProduct">
                  {product.productName}
                </span>
                <p>
                  <span className="sideBarStep1ProductDataCommon">Color:</span>
                  <span className="sideBarStep1ProductDataOption">
                    {product.color}
                  </span>
                </p>
                <p>
                  <span className="sideBarStep1ProductDataCommon">Size:</span>
                  <span className="sideBarStep1ProductDataOption">
                    {product.size}
                  </span>
                </p>
              </div>
              <div className="sideBarStep1ProductPrice">
                <span>{product.offerPrice} €</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  step2 = () => {
    return (
      <form className="sideBarStep2">
        <div>
          <span>Personal Info</span>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="NAME"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="surname"
            value={this.state.surname}
            placeholder="SURNAME"
            onChange={this.changeHandler}
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="EMAIL ADDRESS"
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <span>Shipping Info</span>
          <select onChange={this.countrySelection}>
            {this.props.countries.map(country => {
              return (
                <option value={country.code} key={country.code}>
                  {country.name}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            name="city"
            value={this.state.city}
            placeholder="CITY"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="address"
            value={this.state.address}
            placeholder="ADDRESS"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="cp"
            value={this.state.cp}
            placeholder="CP"
            onChange={this.changeHandler}
          />
        </div>
      </form>
    );
  };

  step3 = () => {
    return (
      <div className="sideBarStep2">
        <div>
          <input
            type="text"
            name="cardName"
            value={this.state.cardName}
            placeholder="CARD NAME"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="cardNumber"
            value={this.state.cardNumber}
            placeholder="CARD NUMBER"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="expiringDate"
            value={this.state.expiringDate}
            placeholder="EXPIRING DATE"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="cvv"
            value={this.state.cvv}
            placeholder="CVV"
            onChange={this.changeHandler}
          />
        </div>
      </div>
    );
  };

  step4 = () => {
    return (
      <div className="sideBarStep4">
        <span className="check">&#x1F5F8;</span>
        <br />
        <span>Thanks for shopping with us.</span>
      </div>
    );
  };
}
