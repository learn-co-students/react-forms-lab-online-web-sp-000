import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      inputValue: ""
    };
  }


  handleChange = event => {
    const message = event.target.value
    this.setState({
      inputValue: message
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.inputValue} onChange={event => this.handleChange(event)} />
        <br />
        <small>{this.props.maxChars - this.state.inputValue.length} characters remaining.</small>
      </div>
    );
  }
}

export default TwitterMessage;
