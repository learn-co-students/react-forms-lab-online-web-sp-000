import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleCharacters = event => {
    this.setState({
      message: event.target.value
    })
  }



  render() {
    const charNum = this.props.maxChars - this.state.message.length;

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleCharacters} value={this.state.message} />
        {charNum}
      </div>
    );
  }
}

export default TwitterMessage;
