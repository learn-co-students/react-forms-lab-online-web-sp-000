import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  render() {
    let charCount = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        <strong> Character Count: </strong><span>{charCount}</span>
      </div>
    );
  }
}

export default TwitterMessage;
