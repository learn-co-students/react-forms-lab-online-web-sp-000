import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""

    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>{this.props.maxChars - this.state.message.length} chars remaining</p>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.changeHandler}/>
      </div>
    );
  }
}

export default TwitterMessage;
