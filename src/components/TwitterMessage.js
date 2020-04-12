import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  remaining = () => {
    return this.props.maxChars - this.state.message.length
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.message}
          onChange={(event) => this.handleMessageChange(event)}
          name="message" id="message" />
        <h3>Remaining characters: {this.remaining()}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
