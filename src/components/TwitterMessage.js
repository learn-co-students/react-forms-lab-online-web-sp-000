import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      remainingChars: 280,
      message: null,
      messageParams: {}
    };
  }

  messageHandler = event => {
    const message = event.target.value
    const max = this.props.maxChars
    const charCalc =  max - message.length
    this.setState({
      remainingChars: charCalc,
      message: message,
      messageParams: {remainingChars: charCalc, message: message}
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <span>{this.state.remainingChars}/{this.props.maxChars}</span>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.messageHandler(event)} />
      </div>
    );
  }
}

export default TwitterMessage;
