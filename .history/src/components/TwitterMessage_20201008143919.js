import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }
handleChange = e => {
  this.setState({
    message: e.target.value
  })
  console.log('TwitterMessage -> e.target.value', e.target.value);
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} maxChars={280} type="text" name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
