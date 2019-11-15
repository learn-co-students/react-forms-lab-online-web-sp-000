import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "This is where your message goes",
      counter: props.maxChars
    };
  }

  handleChange = (event)=> {
    const msg = event.target.value
    const count = this.props.maxChars - msg.length
    this.setState({
      message: msg,
      counter: count
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)}/>
        <p>Characters Remaining: {this.state.counter}</p>
      </div>
    );
  }
}

export default TwitterMessage;
