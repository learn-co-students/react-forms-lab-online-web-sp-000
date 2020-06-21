import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleTyping = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div>
          <strong>Your message:</strong>
          <input onChange={event => this.handleTyping(event)} type="text" name="message" id="message" value={this.state.message}/>
        </div>
        <div>
          <h3>Remaining Characters: {this.props.maxChars -  this.state.message.length}</h3>
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
