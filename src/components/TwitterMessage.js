import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }
  hangleChange = event => {
    this.setState({
      message: event.target.value
    })
  }
  render() {
    let charCount = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          onChange={this.hangleChange}
          name="message" 
          id="message" 
          value={this.state.message} />
        {charCount}
      </div>
    );
  }
}

export default TwitterMessage;
