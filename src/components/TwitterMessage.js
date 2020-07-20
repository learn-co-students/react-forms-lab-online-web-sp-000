import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      remainingChars: this.props.maxChars

    };
  }

  handleInputChange = event => {
    let currentInput = event.target.value
    this.setState({
      input: currentInput,
      remainingChars: this.props.maxChars - currentInput.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.input} onChange={event => this.handleInputChange(event)} />
        <h3>Characters remaining: {this.state.remainingChars}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
