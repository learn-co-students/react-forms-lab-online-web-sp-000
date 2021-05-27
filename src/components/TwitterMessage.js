import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      counter: 0
    };
  }

  handleKeyChange = (event) => {
    let str = event.target.value
    this.setState((state, props)=> {
      return {
        value: str,
        counter: state.counter + str.length
      }

    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleKeyChange} value={this.state.value}/>
        <p>Characters left: {this.props.maxChars - this.state.counter}</p>
      </div>
    );
  }
}

export default TwitterMessage;
