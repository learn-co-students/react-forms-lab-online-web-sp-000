import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={event => this.handleInputChange(event)}
          value={this.state.message} />
          <span>
            <span>
            {this.props.maxChars - this.state.message.length} remaining characters
            </span>
          </span>
      </div>
    );
  }
}

export default TwitterMessage;
