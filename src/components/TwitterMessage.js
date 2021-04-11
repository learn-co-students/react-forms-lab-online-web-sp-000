import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      charsLeft: props.maxChars
    };
  }

  handleInputChange = (e) => {
    let remainingChars = this.props.maxChars - e.target.value.length 
    this.setState({ 
      chars: e.target.value,
      charsLeft: remainingChars
    }) 
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.chars}
          onChange={e => this.handleInputChange(e)}
        /> 
        <span>{this.state.charsLeft} characters left</span>
      </div>
    );
  }
}

export default TwitterMessage;