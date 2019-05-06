import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsRem: props.maxChars,
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      charsRem: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <strong>{this.state.charsRem}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
