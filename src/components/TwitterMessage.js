import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateText = event => {
    this.setState({
      message: event.target.value
    })
  }

  counter = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        onChange={event => this.updateText(event)} 
        value={this.state.message}
      />
      {this.counter()}
      </div>
    );
  }
}

export default TwitterMessage;
