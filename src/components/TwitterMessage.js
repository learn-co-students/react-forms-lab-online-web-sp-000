import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      messageInput: "",
      maxChar: 280
    };
  }

  changeMessage = (event) => {
    const charsLeft = 280 - event.target.value.length
    this.setState({
      messageInput: event.target.value,
      maxChar: charsLeft
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.maxChar}</h3>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.changeMessage(event)} />
      </div>
    );
  }
}

export default TwitterMessage;
