import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      charsRemaining: props.maxChars
    };
  }

  changeMessage = event => {
    let charsRemaining = this.props.maxChars - event.target.value.length
    this.setState({
      message: event.target.value,
      charsRemaining: charsRemaining
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        name="message" 
        id="message" 
        value={this.state.message}
        onChange={ this.changeMessage } />
        <h4>Characters Remaining: {this.state.charsRemaining}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
