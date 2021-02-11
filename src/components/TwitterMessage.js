import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: ""
    };
  }

  handleMsgChange = (event) => {
    this.setState({ msg: event.target.value })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleMsgChange(event)} value={this.state.msg} name="message" id="message" />
        <strong>Character remaining: {this.props.maxChars - this.state.msg.length}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
