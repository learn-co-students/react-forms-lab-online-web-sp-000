import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
    // maximum characters = 280
    // show remaining characters in components
    // counter can have negative values
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        name="message"
        id="message"
        onChange={event => this.setState({message: event.target.value})}
        value = {this.state.message}
         />
         {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
