import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num: this.props.maxChars,
      string: "",
    };
  }

  handleChange = event => {
    let newNum = this.state.num - 1
    this.setState({
      num: newNum,
      string: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)}value={this.state.string}/>
        <strong>{this.state.num}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
