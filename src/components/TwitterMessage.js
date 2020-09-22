import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      msgChars: 0
    };
  }

  handleChangeMessage = (event) =>{
    this.setState({
      message: event.target.value,
      msgChars: event.target.value.length
    })
    // console.log(this.state)
    // console.log(event.target.value.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChangeMessage} value={this.state.message}/>
        <p><strong>Remaining characters:</strong> {this.props.maxChars - this.state.msgChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
