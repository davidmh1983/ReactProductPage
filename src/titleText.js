import React from "react";
import "./titleText.scss";
const titleText = props => {
  let info = props.estiloTitle === "informationTitle" ? "infoStyle" : "";
  return (
    <div className={info + " titleText"}>
      <p className={props.estiloTitle}>{props.title}</p>
      <p className={props.estiloText}>{props.text}</p>
    </div>
  );
};

export default titleText;
