import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageBody: ""
    };
  }

  handleChange = event => {
    this.setState({
      messageBody: event.target.value
    })
  }

  remainingChar = () => (this.props.maxChars - this.state.messageBody.length)

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} value={this.state.messageBody} name="message" id="message" />
        <p>You have {this.remainingChar()} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
