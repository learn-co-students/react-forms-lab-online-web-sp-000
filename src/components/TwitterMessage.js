import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      remainingCharacters: props.maxChars,
      message: ""
    };
  }

  handleInput = (event) => {
    
    this.setState({
        remainingCharacters: this.props.maxChars - event.target.value.length,
        message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleInput(event)} value={this.state.message}/>
        {this.state.remainingCharacters}
      </div>
    );
  }
}

export default TwitterMessage;
