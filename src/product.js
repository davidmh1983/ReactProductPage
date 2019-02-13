import React, { Component } from "react";
import "./product.scss";
import Options from "./options.js";
import TitleText from "./titleText.js";

export default class product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.data.colors[0],
      size: props.data.sizes[0]
    };
  }

  addToCart = event => {
    let data = this.props.data;
    let selection = {
      id: data.id,
      offerPrice: data.offer.price.offerPrice,
      color: this.state.color,
      size: this.state.size,
      brandName: data.brand.name,
      shippingCosts: "0.00",
      productName: data.name,
      imageProduct: data.imageURL
    };
    this.props.addToCart(selection);
  };

  buyNow = event => {
    if (this.props.selected.length > 0) {
      this.props.buyNow();
    }
  };

  selectedColor = color => {
    this.setState({
      color: color
    });
  };
  selectedSize = size => {
    this.setState({
      size: size
    });
  };

  render() {
    const {
      imageURL,
      brand,
      name,
      reviews,
      colors,
      sizes,
      summary,
      productDescription,
      productInformation,
      offer
    } = this.props.data;
    return (
      <div className="product">
        <div className="productData">
          <div className="top">
            <div className="topLeft">
              <img
                alt="Product image"
                className="productImage"
                src={imageURL}
              />
            </div>
            <div className="topRight">
              <span className="brandName"> {brand.name}</span>
              <div className="productAndLogo">
                <div className="productAndLogoLeft">
                  <p className="productName">{name}</p>
                  <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                </div>
                <div className="productAndLogoRight">
                  <img
                    alt="Brand image"
                    className="brandImage"
                    src={brand.logoURL}
                  />
                </div>
              </div>
              <Options
                selector="Color"
                options={colors}
                buttons="colorOption"
                selectedOption={this.selectedColor}
              />
              <Options
                selector="Size"
                options={sizes}
                buttons="sizeOption"
                selectedOption={this.selectedSize}
              />
              <p className="textSummary textProperties">{summary}</p>
            </div>
          </div>
          <div className="bottom textProperties">
            <div className="description">
              <TitleText
                title="Product Description"
                text={productDescription.summary}
                estiloTitle="bigBlackTitle"
                estiloText="blackText"
              />
              <TitleText
                title="Features:"
                text={productDescription.features}
                estiloTitle="normalTitle"
                estiloText="normalText"
              />
              <TitleText
                title="Wangenpolster:"
                text={productDescription.wagenpolster}
                estiloTitle="normalTitle"
                estiloText="normalText"
              />
              <TitleText
                title="Scheitelpoister:"
                text={productDescription.scheilterposter}
                estiloTitle="normalTitle"
                estiloText="normalText"
              />
            </div>
            <div className="information">
              <p className="ProductinformationTitle">Product Information</p>
              {productInformation.map((info, index) => {
                return (
                  <TitleText
                    key={index}
                    title={info[0]}
                    text={info[1]}
                    estiloTitle="informationTitle"
                    estiloText="informationText"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="productOffer">
          <p className="offerTitle">Our best offer</p>
          <div className="offerDiv">
            <div className="offerSummary">
              <div className="offerPrices">
                <p className="offerRate">
                  <span className="offerRateTitle">{offer.merchantName}</span>
                  <span className="offerRateValue">(&#9733; {offer.rate})</span>
                </p>
                <p className="offerOurPrice">
                  {offer.price.offerPrice}
                  {offer.price.currency}
                </p>
                <p className="offerOldPrice">
                  <span>
                    {offer.price.normalPrice}
                    {offer.price.currency}
                  </span>
                  <span>incl. VAT </span>
                </p>
              </div>
              <div className="offerDiscount">
                <p>{offer.price.discount}</p>
              </div>
            </div>
            <p>&#128666; Free Shipping</p>
            <p>&#128339; Delivery in {offer.delivery}</p>
            <p>&#8617; Free returns</p>
            <p>&#9413; {offer.superPoints}Super Points</p>
            <button className="buttonGrey" onClick={this.buyNow}>
              {" "}
              Buy Now{" "}
            </button>
            <button className="buttonWhite" onClick={this.addToCart}>
              {" "}
              Add to cart{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
