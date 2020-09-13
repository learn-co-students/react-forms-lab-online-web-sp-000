import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { text: "" };
  }

  changeHandler = event => this.setState({ text: event.target.value });

  render() {
    const count = this.props.maxChars - this.state.text.length;
    return (
      <div>
        <strong>Your message (count {count}):</strong>
        <input type="text" name="message" id="message" value={this.state.text} onChange={this.changeHandler}/>
      </div>
    );
  }
}

export default TwitterMessage;
