import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      charsRemaining: props.maxChars,
      input: ""
    };
  }

  handleChange = (event) => {
    let length = event.target.value.length
    this.setState({
      charsRemaining: this.props.maxChars - length,
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.input} />
        <p>{this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
