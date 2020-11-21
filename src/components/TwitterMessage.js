import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: ""
    };
  }

  messageHandler = (event) => {
    this.setState({message: event.target.value})
  }

  render() {
    let remChars = this.props.maxChars-this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        onChange={event => this.messageHandler(event)}
        value={this.state.message}
        />
        {remChars} characters remaining.
      </div>
    );
  }
}

export default TwitterMessage;
