import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  handleInput = (e) => {
    this.setState({ 
      message: e.target.value
    })
  }

  render() {
    let remainingChars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleInput} value={this.state.message}/>
        {remainingChars}
      </div>
    );
  }
}

export default TwitterMessage;
