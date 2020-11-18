import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    this.setState({
      message: e.target.value
    })
  }

  remainingCharacters = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>{this.props.maxChars - this.state.message.length}
        <input type="text" name="message" id="message"  onChange={this.handleChange} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
