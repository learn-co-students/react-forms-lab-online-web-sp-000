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

  render() {
    let charsLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.message} 
          onChange={this.handleChange} 
        />
        <div>Number of Characters Remaining: {charsLeft}</div>
      </div>
    );
  }
}

export default TwitterMessage;
