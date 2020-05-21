import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      max: props.maxChars,
      remainingChar: props.maxChars,
      message: ""
    };
  }

  handleChange = event => {
    // event.persist()
    // const savedEvent = event
    const savedTarget = event.target
    console.log(savedTarget.value.length)
    this.setState(previousState=> {
      return { 
        [savedTarget.name]: savedTarget.value,
        remainingChar: previousState.max - savedTarget.value.length
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <p>{this.state.remainingChar} Characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
