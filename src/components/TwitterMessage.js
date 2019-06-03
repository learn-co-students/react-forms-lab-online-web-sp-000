import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: '',
      charsLeft: this.props.maxChars
    };
  }

  updateText = (event) => {
    this.setState({
      currentText: event.target.value,
      charsLeft: this.state.charsLeft - 1
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.currentText} onChange={event => this.updateText(event)} />
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
