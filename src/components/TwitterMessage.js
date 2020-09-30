import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { charsTyped: "" };
  }

  handleUpdate = event => {
    this.setState({ 
      charsTyped: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleUpdate(event)} value={this.state.charsTyped} />
        <p> Remaining Characters: {this.props.maxChars - this.state.charsTyped.length} </p>
      </div>
    );
  }
}

export default TwitterMessage;
