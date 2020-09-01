import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      charsLeft: props.maxChars
    };
  }

  handleChange = (e) => {
    let newMessage = e.target.value;
    let newMessageLength = e.target.value.length;
    this.setState({
      message: newMessage,
      charsLeft: this.props.maxChars - newMessageLength
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={e=> this.handleChange(e)} type="text" name="message" id="message" value={this.state.message} />
        <p>Characters left: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
