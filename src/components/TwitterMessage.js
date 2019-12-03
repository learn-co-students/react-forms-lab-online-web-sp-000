import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} value={this.state.tweet} type="text" name="message" id="message" />
        <span>Characters Remaining: {this.props.maxChars - this.state.tweet.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
