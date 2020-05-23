import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange = {this.handleChange} value={this.state.message}/>
        <div>{this.props.maxChars - this.state.message.length} character left</div>
      </div>
    );
  }
}

export default TwitterMessage;
