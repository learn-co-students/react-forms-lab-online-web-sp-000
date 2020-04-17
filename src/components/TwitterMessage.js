import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      tweet: ""
    };
  }

  showCharacters = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={event => this.showCharacters(event)} value={this.state.tweet}
          />
          {this.props.maxChars - this.state.tweet.length}
      </div>
    );
  }
}

export default TwitterMessage;

//prop: maxChars - 280
//add attributes to input element to make sure controlled
  //Its value should be saved in component's state and should update on every change to the input
//show remaining characters in component