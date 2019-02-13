import React from "react";

const buttonNext = props => {
  if (props.enable === 1) {
    return (
      <button className="buttonGrey" onClick={props.nextStep}>
        Next Step
      </button>
    );
  }
  if (props.enable === 0) {
    return (
      <button className="buttonGrey" disabled onClick={props.nextStep}>
        Next Step
      </button>
    );
  }
};

export default buttonNext;
