import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      remainingChars: props.maxChars,
      currentMessage: '',
    }
  }

  handleOnChange = (event) => {
    const currentCharCount = event.target.textLength;

    this.setState({
      currentMessage: event.target.value,
      remainingChars: (this.props.maxChars - currentCharCount)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleOnChange(event)} value={this.state.currentMessage}/>
        {this.state.remainingChars}
      </div>
    );
  }
}

export default TwitterMessage;
