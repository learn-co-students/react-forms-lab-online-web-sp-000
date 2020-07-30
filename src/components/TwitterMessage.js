import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      message: ""
    };
  }
  handleChange = (event) => {
    this.setState(
      {[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <div>Counter:{this.props.maxChars - this.state.message.length}</div>
      </div>
    )
  }
}

export default TwitterMessage;
