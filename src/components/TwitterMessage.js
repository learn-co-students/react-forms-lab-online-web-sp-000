import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      tweet: '',
      charsRemaining: props.maxChars
    };
  }

  handleTweet = event => {
    this.setState({
      tweet: event.target.value,
      charsRemaining: (this.props.maxChars - event.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleTweet(event)} value={this.state.tweet}/>
        <div>{this.state.charsRemaining}</div>
      </div>
    );
  }
}

export default TwitterMessage;
