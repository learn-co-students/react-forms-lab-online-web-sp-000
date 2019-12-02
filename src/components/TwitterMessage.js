import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  updateMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.updateMessage}
        />
        <span>
          {this.props.maxChars - this.state.message.length} characters left
        </span>
      </div>
    );
  }
}

export default TwitterMessage;
