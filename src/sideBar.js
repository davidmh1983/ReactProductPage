import React, { Component } from "react";
import "./sideBar.scss";
import SideBarSteps from "./sideBarSteps";
import ButtonNext from "./buttonNext.js";
//import Countries from "../data/countries.js";

export default class sideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      countries: [],
      enable: 1
    };
    this.callApi();
  }

  initializeStep = () => {
    this.setState({
      step: 1,
      enable: 1
    });
  };

  closeSideBar = event => {
    this.props.closeModal(this.state.step);
    this.initializeStep();
  };

  nextStep = event => {
    let nextStep = this.state.step + 1;
    let enable = this.state.enable === 0 ? 1 : 0;
    this.setState({
      step: nextStep,
      enable: enable
    });
  };

  myData = data => {
    let datos = [];
    for (var i = 0; i < data.length; i++) {
      datos[i] = {
        name: data[i].name,
        code: data[i].alpha2Code
      };
    }
    this.setState({
      countries: datos
    });
  };

  callApi() {
    let apiaddress = "https://restcountries.eu/rest/v2/all";
    fetch(apiaddress)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.myData(data);
      });
  }
  enableButton = enable => {
    this.setState({
      enable: enable
    });
  };

  render() {
    let noFooter = this.state.step === 4 ? "hiddenFooter" : "";
    let open = this.props.openModal === 1 ? "openModal" : "";
    return (
      <div className={open + " sideBar"}>
        <div className="sideBarContent">
          <div className="sideBarContentHeader">
            <span className="close" onClick={this.closeSideBar}>
              &times;
            </span>
            <p>Your order</p>
          </div>
          <SideBarSteps
            countries={this.state.countries}
            data={this.props.data}
            step={this.state.step}
            updateCost={this.props.updateCost}
            enableButton={this.enableButton}
            enable={this.state.enable}
          />

          <div className={noFooter + " sideBarContentFooter"}>
            <p>
              <span className="sideBarContentFooterCommon">Shipping Cost</span>
              <span className="sideBarContentFooterPrice">
                {" "}
                {this.props.shippingCost} €{" "}
              </span>
            </p>
            <p>
              <span className="sideBarContentFooterCommon"> Total </span>
              <span className="sideBarContentFooterPrice">
                {this.props.totalCost} €
              </span>
            </p>
            <ButtonNext nextStep={this.nextStep} enable={this.state.enable} />
          </div>
        </div>
      </div>
    );
  }
}
