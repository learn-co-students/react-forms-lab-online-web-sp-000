import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: " "};
  }

  handleChange = event => { this.state({message: event.target.value})};

  remainingCharacters = () => {return this.props.maxChars - this.state.message.length};

  render() {
    return (
      <div>
        <strong>Your message: {this.remainingCharacters()}</strong>
        <input onChange={event => this.handleChange(event)} value={this.state.message} type="text" name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
