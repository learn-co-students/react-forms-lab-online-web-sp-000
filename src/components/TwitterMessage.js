import React from "react";

class TwitterMessage extends React.Component {
  state = {
    text: ""
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.text} onChange={event => this.handleOnChange(event)}/>
    <p>{this.props.maxChars - this.state.text.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
