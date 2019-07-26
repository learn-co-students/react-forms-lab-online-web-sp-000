import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  changedInput = event => {
    this.setState({
      value: event.target.value
    }, () => {console.log(this.state.value)});
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.changedInput} value={this.state.value}/><br/>
        {this.props.maxChars - this.state.value.length} characters remaining.
      </div>
    );
  }
}

export default TwitterMessage;
