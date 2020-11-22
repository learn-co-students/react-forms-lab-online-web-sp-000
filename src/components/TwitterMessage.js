import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      remaining_values: 280
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value, 
      remaining_values: 280 - event.target.value.length 
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleMessageChange} value={this.state.message}/>
        <p>Remaining values: {this.state.remaining_values}</p>
      </div>
    );
  }
}

export default TwitterMessage;
