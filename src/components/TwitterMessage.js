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
      let charsRemaining = this.props.maxChars - this.state.message.length

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
            onChange={this.handleChange}
            name="message"
            id="message"
            value={this.state.message} />
        <br/>
        {charsRemaining}
      </div>
  
    );
  }
}

export default TwitterMessage;
