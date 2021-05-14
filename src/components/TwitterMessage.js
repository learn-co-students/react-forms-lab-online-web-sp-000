import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"  value={this.state.name} onChange={this.handleChange} />
        <p>You have {this.props.maxChars - this.state.name.length} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
