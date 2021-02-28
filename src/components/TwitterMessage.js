import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      text: ""
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} 
        value={this.state.text} />
        <p>You have {this.state.maxChars - this.state.text.length} "Chars" remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
