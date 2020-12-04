import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      remaining: props.maxChars
    };
  }

  eventHandler = (event) => {
    this.setState({
      message: event.target.value,
      remaining: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.eventHandler(event)} value={this.state.message}/>
        {this.state.remaining} characters left.
      </div>
    );
  }
}

export default TwitterMessage;
