import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valueText: "", 
      textRemaining: props.maxChars
    };
  }

  changeText = (event) => {
    this.setState({valueText: event.target.value, textRemaining: this.props.maxChars - event.target.value.length})
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.valueText} onChange={event => this.changeText(event)}/>
        <p>{this.state.textRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
