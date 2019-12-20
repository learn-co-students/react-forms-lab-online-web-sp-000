import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      characters: props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      characters: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          value={this.state.message}
          onChange={event => this.handleChange(event)} 
          type="text" name="message" id="message" />
          <pre> { this.state.characters } Characters Remaining </pre>
          
      </div>
    );
  }
}

export default TwitterMessage;
