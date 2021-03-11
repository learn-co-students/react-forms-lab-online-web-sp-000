import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  handleTweetChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleTweetChange(event)}
          value={this.state.message} /> 
        {"\n"}
        {this.props.maxChars - this.state.message.length} characters remaining.
      </div>
    );
  }
}

export default TwitterMessage;