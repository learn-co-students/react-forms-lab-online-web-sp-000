import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      text: "",
    };
  }

  handleChange = event => {
    let newCount = this.state.maxChars - 1
    this.setState({
      maxChars: newCount,
      text: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        name="message"
        id="message"
        onChange={event => this.handleChange(event)}
        value={this.state.text} />
        <strong>{this.state.maxChars}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
