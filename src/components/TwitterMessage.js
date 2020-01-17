import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      tweet: "",
      characters: props.maxChars
    };
  }

  handleTweet = event => {
    console.log(event.target.value)
    this.setState({
      message: event.target.value,
      characters: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    console.log(this.state.message)
    return (
      <div>
        <strong>You have {this.state.characters} characters remainings.</strong>
        <input type="text" name="message" id="message" onChange={this.handleTweet} value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
