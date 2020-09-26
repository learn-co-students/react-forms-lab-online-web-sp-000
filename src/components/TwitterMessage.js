import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      maxLength: this.props.maxChars,
      remainingChars: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    console.log(this.state.inputValue)
    return (
      <React.Fragment>
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.inputValue} onChange={this.handleChange} />
      </div>
      <p>{this.state.remainingChars}</p>
      </React.Fragment>
    );
  }
}

export default TwitterMessage;
