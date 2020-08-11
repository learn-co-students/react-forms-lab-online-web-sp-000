import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageChange= event => {
    this.setState({
      message: event.target.value,
    })
  }


  render() {
    let charCount = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message}/>
        <p>Characters Left: {charCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;
