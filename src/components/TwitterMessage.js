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
      [event.target.name]: event.target.value
    });
  }

  remainingCharacters = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
          <strong>Your message:</strong>
          <input
            type="text"
            name="message"
            id="message"
            onChange={this.handleChange}
            value={this.state.message}/>
        Remaining characters: {this.remainingCharacters()}
      </div>
    );
  }
}

export default TwitterMessage;
