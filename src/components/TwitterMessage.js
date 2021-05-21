import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      userInput: ""
    };
}

  handleUserInput = event => {
    this.setState({
      userInput: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
                value={this.state.userInput}
                onChange={event => this.handleUserInput(event)}
        />
        <p>Characters remaining: <span>{this.props.maxChars - this.state.userInput.length}</span></p>
      </div>
    );
  }
}

export default TwitterMessage;
