import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <p>You have {this.props.maxChars - this.state.value.length} characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
