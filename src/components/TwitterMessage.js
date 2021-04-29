import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      remainingChars: props.maxChars
    };
  }

  eventHandler = (event) => {
    this.setState({
      message: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.eventHandler(event)} value={this.state.message}/>
        {this.state.remainingChars}
      </div>
    );
  }
}

export default TwitterMessage;
