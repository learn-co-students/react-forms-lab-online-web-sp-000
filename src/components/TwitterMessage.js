import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input id="message" name="message" type="text" value={this.state.message} onChange={(e) => this.handleMessageChange(e)} />
        <div>
          Remaining Characters: {this.props.maxChars - this.state.message.length}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
