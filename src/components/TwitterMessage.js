import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: " "
    };
  }

  remainingChars = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.setState({message: event.target.value})} value={this.state.message}/>
        <p> Remaining Characters: {this.remainingChars()} </p>
      </div>
    );
  }
}

export default TwitterMessage;
