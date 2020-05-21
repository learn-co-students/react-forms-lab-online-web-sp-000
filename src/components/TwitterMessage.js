import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageUpdate = event => {
    this.setState({
       message : event.target.value
    })
  }

  // remainingChars = () => {
  //   (280 - this.state.message.length)
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <form>
          <input type="text" name="message" id="message" value = { this.state.message } onChange = {event => this.handleMessageUpdate(event)}/>
          {this.props.maxChars - this.state.message.length}
        </form>
      </div>
    );
  }
}

export default TwitterMessage;
