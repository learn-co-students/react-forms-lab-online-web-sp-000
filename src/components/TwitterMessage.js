import React from "react";

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""

    };
  }


  handleTweet= event => {
   this.setState({
     tweet: event.target.value
   })

  }


  render() {
    console.log("State", this.state )
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value= {this.state.tweet} onChange = {event => this.handleTweet(event)}/>
        <h4> Words left
        {this.props.maxChars - this.state.tweet.length}
        </h4>

      </div>
    );
  }
}
