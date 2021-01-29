import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      counter: 0
    };
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value,
      counter: event.target.value.length
    })
    console.log(this.state, "handle change")
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Max characters: {this.props.maxChars - this.state.counter}</p>
        <p>Character count: {this.state.counter}</p>
        <input type="text" name="message" id="message" value={this.state.inputValue} onChange={event => this.handleChange(event)}/>
      </div>
    )
  }
}

export default TwitterMessage
