import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: '',
                  maxChars: this.props.maxChars};
  }

  displayChars = () => {
    return 140 - this.state.value.length;
  }

  handleChange = event => {
    this.setState({value: event.target.value,
                   maxChars: 140 - this.state.value.length}, this.displayChars)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>Remaining characters: {this.displayChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
