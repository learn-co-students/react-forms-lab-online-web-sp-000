import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
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
        <form onSubmit={event => this.handleSubmit(event)}>
          <strong>Your message:</strong>
          <input type="text" name="message" value={this.state.message} onChange={this.handleChange} id="message" />
        </form>
        <div>
          Remaining Characters:
          {this.props.maxChars-this.state.message.length}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
