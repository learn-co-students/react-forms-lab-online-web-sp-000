import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      remainingChars: props.maxChars,
      input: ""
    };
  }

  handleChange = event => {
    const previousChars = this.state.remainingChars
    this.setState({
      remainingChars: previousChars - event.target.value.length,
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.handleChange(event)}
          value={this.state.input}
        />
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
