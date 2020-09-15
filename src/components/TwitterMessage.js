import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:"",
      charsRemaining: 280
    };
  }
  handleChange = event => {
    if (this.state.message.length < 281){
      console.log(this.state.message.length)
      this.setState({
        [event.target.name]: event.target.value,
        charsRemaining: this.state.charsRemaining - this.state.message.length 
      })

    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} name="message" id="message" />
        <div>{280 - this.state.message.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
