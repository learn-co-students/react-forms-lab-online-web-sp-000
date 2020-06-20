import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      remainingChars: this.props.maxChars
    };
  }

  handleChange = (event) => {
    //event.persist();
    this.setState(previousState => {
      let newValue = event.target.value;
      let newLength = newValue.length;
      let newRemainingChars = previousState.value.length > newLength ? previousState.remainingChars + 1 : previousState.remainingChars - 1
      return {
        value: newValue,
        remainingChars: newRemainingChars
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange}/>
        <p>Remaining Characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
