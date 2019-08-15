import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      char: 140
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
      char: this.state.char - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.text}/>
        <strong>You have {this.state.char} remaining</strong>
      </div>
    );
  }
}

export default TwitterMessage;
