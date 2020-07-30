import React from "react";
import App from '../App'

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      messageText: "",
      remainingChars: props.maxChars
    };
  }

  handleTextChange = (e) => {
    this.setState({
      messageText: e.target.value,
      remainingChars: this.props.maxChars - e.target.value.length
    },() => console.log(this.state.remainingChars))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message"
          value={this.state.messageText}
          onChange={this.handleTextChange}
        />
        <p>Remaining characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
