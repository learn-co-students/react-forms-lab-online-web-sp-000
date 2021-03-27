import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { value: '' };

  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  render() {
    let newLength = this.props.maxChars - this.state.value.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={this.handleChange} id="message" value={this.state.value} />
        <p>{newLength}</p>
      </div>
    );
  }
}

export default TwitterMessage;
