import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  handleMessageChange = (e) => {
    console.log(e.target.value)
    this.setState({
      message: e.target.value
    })    
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleMessageChange} type="text" name="message" id="message" value={this.state.message} />
        <div>Remaining characters: {this.props.maxChars - this.state.message.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
