import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      currentCount: 0,
      message: null
    };
  };

  countCharacters = event => {
    this.setState({
      message: event.target.value,
      currentCount: event.target.value.length
    })
  };

  render() {
    return (
      <div>
        <strong>{this.props.maxChars - this.state.currentCount}</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.countCharacters(event)} />
      </div>
    );
  }
}

export default TwitterMessage;
