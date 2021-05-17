import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleClick(event) {
    this.setState({
      value: event.target.value
    })
  }

    render() {
    const chars = this.props.maxChars
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleClick(event)} value={this.state.value}/>
        <p>{this.props.maxChars  - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
