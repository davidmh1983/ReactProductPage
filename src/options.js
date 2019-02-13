import React, { Component } from "react";
import "./options.scss";

export default class options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.options[0]
    };
  }

  changeOption = event => {
    this.setState({
      selected: event.target.value
    });
    this.props.selectedOption(this.state.selected);
  };

  render() {
    return (
      <div className="options">
        <span className="optionsTitle">{this.props.selector}:</span>
        <span className="optionsTitleSelected">{this.state.selected}</span>
        <div className="optionsSelection">
          {this.props.options.map(option => {
            let selected = option === this.state.selected ? "selected" : "";
            return (
              <button
                key={option}
                value={option}
                className={
                  "buttonOptions " + selected + " " + this.props.buttons
                }
                onClick={this.changeOption}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
