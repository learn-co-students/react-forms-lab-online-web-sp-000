import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ''};
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      remainingValues: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message} />
        <span>{this.state.remainingValues ? this.state.remainingValues : this.props.maxChars}</span>
      </div>

    );
  }
}

export default TwitterMessage;
