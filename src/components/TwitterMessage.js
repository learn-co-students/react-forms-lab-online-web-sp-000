import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }


  handleMessageChange = event =>
  {
    this.setState({
      message: event.target.value,
      length: event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event =>this.handleMessageChange(event)} type="text" name="message" id="message" value={this.state.message}/>
    <p>Remaining Characters: {this.props.maxChars - this.state.length}/{this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
