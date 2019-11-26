import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      message: "",
      charsRemaining: props.maxChars
    };
  }

  changeHandler = event => {
    this.setState({
      message: event.target.value,
      charsRemaining: (this.props.maxChars - event.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.changeHandler(event)} value={this.state.message} />
        <div>{this.state.charsRemaining} characters remaining.</div>
      </div>
    );
  }
}

export default TwitterMessage;
