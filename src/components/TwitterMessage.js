import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      charsLeft: props.maxChars,
      input: ""};
  }

  handleInput = event => {
    let msg = event.target.value
    this.setState({
      charsLeft: this.state.maxChars - msg.length,
      input: msg
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength={this.state.maxChars} onChange={this.handleInput} value={this.state.input}/>
        <p>Characters Left: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
