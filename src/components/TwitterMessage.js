import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      maxChars: props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    const charactersLeft = this.state.maxChars - this.state.inputValue.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.inputValue} type="text" name="message" id="message" />
        <p>You have {charactersLeft} remaining characters</p>
      </div>
    );
  }
}

export default TwitterMessage;
