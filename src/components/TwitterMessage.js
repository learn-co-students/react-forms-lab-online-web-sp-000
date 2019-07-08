
import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: ''};
  }

  updateChars = (e) => {
    this.setState({
      message:  e.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.updateChars} value={this.state.message}/>

        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
