import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      availableChars: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      availableChars: this.props.maxChars - event.target.value.length
    });
  }


  render() {
    return (
      <div>
        <strong>Your message: {this.state.availableChars} available characters.</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange = {this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
