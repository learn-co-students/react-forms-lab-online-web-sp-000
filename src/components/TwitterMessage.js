import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charsLeft: props.maxChars
    };
  }

  handleChange = e => {
    const newMessage = e.target.value
    this.setState({
      message: newMessage,
      charsLeft: this.props.maxChars - newMessage.length
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
          onChange={e => this.handleChange(e)}
        />
        <span>Chars Left '{this.state.charsLeft}'</span>
      </div>
    );
  }
}

export default TwitterMessage;
