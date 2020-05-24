import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charsRemaining: this.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      charsRemaining: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <div>Max Characters: {this.props.maxChars}</div>
        <input 
        type="text" 
        name="message" 
        id="message"
        onChange={event => this.handleChange(event)}
        value={this.state.message}
        />
        <div>Character Remaining: {this.state.charsRemaining}</div>
      </div>
    );
  }
}

export default TwitterMessage;
