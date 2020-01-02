import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      tweet: "",
      characterCounter: props.maxChars
    };
  }

  handleTweet = event =>{
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweet}
        onChange={e => this.handleTweet(e)}/>
        <h2>
          Remaining Characters: 
        {this.state.characterCounter - this.state.tweet.length}
        </h2>
      </div>
    );
  }
}

export default TwitterMessage;
