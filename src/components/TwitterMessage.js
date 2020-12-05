import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
