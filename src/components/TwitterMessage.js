import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = event => {
    this.setState({
      [event.target.name]:  event.target.value
    })
  }

  render() {

    return (
      <div>
        <strong>Your message:</strong>
        <p>Remainging characters: {this.props.maxChars - this.state.message.length}</p>
        <input type="text" onChange={event => this.handleMessage(event)} name="message" id="message" value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
