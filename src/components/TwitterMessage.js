import React from "react";

class TwitterMessage extends React.Component {
  constructor({ maxChars }) {
    super();

    this.state = {
      message: '',
      charsLeft: maxChars
    };
  }

  handleChange = event => {
    const newLength = this.props.maxChars - event.target.value.length
    this.setState({
      message: event.target.value,
      charsLeft: newLength
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
          value={this.state.message}
          onChange={event => this.handleChange(event)}
        />
        {this.state.charsLeft}
      </div>
    );
  }
}

export default TwitterMessage;
