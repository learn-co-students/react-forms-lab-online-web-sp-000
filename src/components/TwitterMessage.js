import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChnage = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let remainingChars = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChnage} value={this.state.message} />
        <br />
        <small>Remaining Characters: {remainingChars}</small>
      </div>
    );
  }
}

export default TwitterMessage;
