import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = (e) => { 
    const currentMessage = e.target.value
    this.setState({
      message: currentMessage
    })
  }
  
  charsLeft = () => { 
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleMessage} value={this.state.message} type="text" name="message" id="message" />
        {this.charsLeft()}
      </div>
    );
  }
}

export default TwitterMessage;
