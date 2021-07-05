import React from "react";
import { throws } from "assert";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.setState({message: event.target.value})} value={this.state.message}/>
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
