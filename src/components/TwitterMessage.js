import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleTyping = event => {
    this.setState({
      message: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>{this.props.maxChars - this.state.message.length} chars left</p>
        <input 
          type="text"
          name="message"
          id="message"
          onChange={this.handleTyping}
          value={this.state.message}
        />
      </div>
    );
  }
}

export default TwitterMessage;
