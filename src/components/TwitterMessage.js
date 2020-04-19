import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      maxChars: 280
    };
  }

  handleChange = event => {
    const newChars = this.state.maxChars - event.target.value.length
    this.setState({
      message: event.target.value,
      maxChars: newChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message}/>
        <h3>{this.state.maxChars}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
