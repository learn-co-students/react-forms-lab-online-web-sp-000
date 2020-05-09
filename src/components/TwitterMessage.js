import React from "react";

class TwitterMessage extends React.Component {
  
  constructor() {
    super();

    this.state = {
      messageText: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      messageText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.messageText} onChange={event => this.handleChange(event)}
        />
        <strong>Remaining Characters:</strong>
        <span>{this.props.maxChars - this.state.messageText.length}</span>
      </div>
    );
  }

}

export default TwitterMessage;
