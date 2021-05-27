import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = (event) => {
    this.setState({
      message: event.target.value
    })
    
  }

  render() {
    let count = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleMessage} value={this.state.message}/>
        <p id="counter">{count}</p>
      </div>
    );
  }
}

export default TwitterMessage;
