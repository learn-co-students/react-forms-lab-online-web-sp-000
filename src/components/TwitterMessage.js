import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      message: ""
    };
  }

  changeMessage = event => {
    this.setState({
      message: event.target.value
    });
  };
  change = event => {
    this.changeCount(event);
    this.changeMessage(event);
  };

  changeCount = event => {
    this.setState(previousState => {
      return {
        maxChars: previousState.maxChars - 1
      };
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={event => this.change(event)}
          name="message"
          id="message"
          value={this.state.message}
        />
        <h2>{this.state.maxChars}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
