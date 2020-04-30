import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      charCount: props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      charCount: this.props.maxChars - event.target.value.length
    })
  
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)}/>
        <p>{this.state.charCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;
