import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
         type="text"
         value={this.state.message}
         onChange={event => this.handleChange(event)}
        />
        <h4>
          Remaining Characters: 
          {this.props.maxChars - this.state.message.length}
        </h4>
      </div>
    );
  }
}

export default TwitterMessage;
