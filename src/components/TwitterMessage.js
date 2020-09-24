import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
    
  }

  displayCharacters = event => { // Function triggered by the event change that sets our state equal to the value of the input.
    this.setState({
      tweet: event.target.value
    })
  }


  // We include an 'onChange' to our input that updates the value of our 'tweet' attribute as a user inputs text.
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.displayCharacters(event)} value={this.state.tweet}/>

        {this.props.maxChars - this.state.tweet.length}
      </div>
    ); // The piece of code before the div closes takes our maxChars value and the length of our tweet to determine how many characters are left to use.
  }
}

export default TwitterMessage;
