import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      currentChars: 0,
      value: ''
    };
  }

  handleMessageChange = event => {
    let charCount = this.state.currentChars
    this.setState({
      currentChars: ++charCount,
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={event => this.handleMessageChange(event)}/>
        <p><strong>Remaining characters: </strong>{this.props.maxChars - this.state.currentChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
