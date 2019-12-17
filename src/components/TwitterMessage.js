import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charCount: 0,
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      charCount: e.target.value.length,
      message: e.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange}
          type="text"
          name="message"
          id="message"
          value={this.state.message} />
        <p>{this.props.maxChars - this.state.charCount} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
