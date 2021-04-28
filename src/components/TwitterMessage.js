import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  remainingCharacters() {
    return 280 - this.state.message.length;
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.handleChange(event)}
          value={this.state.message}
        />
        <p>{this.remainingCharacters()}/280</p>
      </div>
    );
  }
}

export default TwitterMessage;
