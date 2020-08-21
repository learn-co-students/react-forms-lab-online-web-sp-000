import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {value: ""};
  }
  updateState = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  counter = () => {
    console.log()
    if (typeof this.state.value === 'undefined') {
      return this.props.maxChars
    } else {
      return this.props.maxChars - (this.state.value).length
    }
  }

  render() {
    return (
      <div>
        <h1>{this.counter()}</h1>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.updateState(event)} value={this.state.value}/>
      </div>
    );
  }
}

export default TwitterMessage;
