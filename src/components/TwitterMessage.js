import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      maxChars: props.maxChars
    };
  }

  handleChange = (event) => {
    let mc = this.state.maxChars - 1;
    this.setState({
      message: event.target.value,
      maxChars: mc
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleChange}
          name="message"
          id="message"
          value={this.state.message}
        />
        Remaining Characters: {this.state.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
