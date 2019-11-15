import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    //initial value
    this.state = {
      tweet: ""

    };
  }


  handleChange = event => {
    this.setState({
      tweet: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <p>Remaining chars: {this.props.maxChars - this.state.tweet.length}</p>

        <strong>Your message:</strong>
        <input 
            type="text" 
            name="message" 
            id="message" 
            onChange={event => this.handleChange(event)}
            value={this.state.tweet}
        />
      </div>

 

    );
  }
}

export default TwitterMessage;
