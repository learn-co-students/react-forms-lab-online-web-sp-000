import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remainingChars: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
        onChange={event => {this.handleChange(event)}}
        value={this.state.value}
        />
       
        Remaining Characters: {this.state.remainingChars}
      </div>
    );
  }
}

export default TwitterMessage;
