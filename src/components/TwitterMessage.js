import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      v: ""
    };
  }

  handleChange = (event) => {
    let value = event.target.value
    this.setState({
      v: value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.v} onChange={event => this.handleChange(event)} name="message" id="message" />
        <p>You got {this.props.maxChars - this.state.v.length} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
