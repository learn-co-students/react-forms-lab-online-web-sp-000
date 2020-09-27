
import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleTextBoxChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.value} onChange={this.handleTextBoxChange} type="text" name="message" id="message" />
        <p>
          remaining characters: {this.props.maxChars - this.state.value.length}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;