import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      // charsLeft: this.props.maxChars,
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      charsLeft: (this.props.maxChars - e.target.value.length),
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        {this.state.charsLeft || this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
