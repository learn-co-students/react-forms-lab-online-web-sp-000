
import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  render() {
    let characterCounter = this.props.maxChars - this.state.value.length;
    return (
      <div>
        <strong>Your value:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value} />
        {characterCounter} / {this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;