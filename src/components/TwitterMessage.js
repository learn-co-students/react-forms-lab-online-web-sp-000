import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageInput = event => {
    this.setState({
      message: event.target.value
    })
  }



  render() {
    
    const remainCharacterCount = this.props.maxChars - this.state.message.length

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageInput(event)} value={this.state.message}/>
        <p>Remaining Characters Count: {remainCharacterCount} </p>
      </div>
    );
  }
}

export default TwitterMessage;
