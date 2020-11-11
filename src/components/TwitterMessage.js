import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
      counter: props.maxChars
    };
  }

  change = (text) => {
    this.setState((previousState) => {
      return {
        ...this.state,
        value: text,
        counter: this.props.maxChars - text.length
      }
    }) 
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(event) => {this.change(event.target.value)}} type="text" name="message" id="message" value={this.state.value}/><br/>
        remaining characters: {this.state.counter}
      </div>
    );
  }
}

export default TwitterMessage;
