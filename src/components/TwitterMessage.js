import React from "react";

class TwitterMessage extends React.Component {

  state = {
    message: ""
  }


  changeMaxChars = event => {
    this.setState({
      message: event.target.value
    })
  }

  charCounter = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => { this.changeMaxChars(event)}} value={this.state.message} type="text" name="message" id="message" />
        {this.charCounter()}
      </div>
    );
  }
}

export default TwitterMessage;


