import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  charsLeft(){
    const message = this.state.message
    return this.props.maxChars - (message ? message.length : 0)
  }

  render() {
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
        
          {this.charsLeft()}
        
      </div>
    );
  }
}

export default TwitterMessage;
