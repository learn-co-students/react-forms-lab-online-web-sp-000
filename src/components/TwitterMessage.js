import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    
    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" handleChange={this.handleChange} />
      </div>
    );
  }
}

export default TwitterMessage;
